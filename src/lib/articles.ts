import fs from 'node:fs';
import path from 'node:path';

import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');
export const DEFAULT_PAGE_SIZE = 6;

export type ArticleFrontMatter = {
    title: string;
    date: string;
    categoryId: string;
    categoryName: string;
    tags?: string[];
    excerpt?: string;
    heroImage?: string;
};

export type ArticleMeta = ArticleFrontMatter & {
    slug: string;
};

export type Article = ArticleMeta & {
    content: string;
};

export type ArticleHeading = {
    id: string;
    text: string;
    level: number;
};

function readArticleFile(slug: string) {
    const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        throw new Error(`Article file not found for slug: ${slug}`);
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    return { content, data: data as Partial<ArticleFrontMatter> };
}

function isValidFrontMatter(data: Partial<ArticleFrontMatter>): data is ArticleFrontMatter {
    return Boolean(
        data.title &&
            data.date &&
            data.categoryId &&
            data.categoryName &&
            typeof data.title === 'string' &&
            typeof data.date === 'string' &&
            typeof data.categoryId === 'string' &&
            typeof data.categoryName === 'string'
    );
}

export function getArticleSlugs() {
    if (!fs.existsSync(ARTICLES_DIR)) {
        return [];
    }

    return fs
        .readdirSync(ARTICLES_DIR)
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string): Article {
    const { content, data } = readArticleFile(slug);

    if (!isValidFrontMatter(data)) {
        throw new Error(`Invalid front matter for article: ${slug}`);
    }

    return {
        slug,
        content,
        ...data,
    };
}

export function getAllArticles(): ArticleMeta[] {
    return getArticleSlugs()
        .map((slug) => {
            const { data } = readArticleFile(slug);
            if (!isValidFrontMatter(data)) {
                throw new Error(`Invalid front matter for article: ${slug}`);
            }
            return {
                slug,
                ...data,
            } satisfies ArticleMeta;
        })
        .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));
}

export function getArticlesByCategory(categoryId: string) {
    return getAllArticles().filter((article) => article.categoryId === categoryId);
}

export function getPaginatedArticlesByCategory(
    categoryId: string,
    page: number,
    pageSize = DEFAULT_PAGE_SIZE
) {
    const articles = getArticlesByCategory(categoryId);
    const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
    const clampedPage = Math.min(Math.max(page, 1), totalPages);
    const offset = (clampedPage - 1) * pageSize;

    return {
        entries: articles.slice(offset, offset + pageSize),
        totalPages,
        page: clampedPage,
        totalCount: articles.length,
    };
}

export function getCategories() {
    const articles = getAllArticles();
    const categories = new Map<string, { id: string; name: string; count: number }>();

    for (const article of articles) {
        const existing = categories.get(article.categoryId);
        if (existing) {
            existing.count += 1;
        } else {
            categories.set(article.categoryId, {
                id: article.categoryId,
                name: article.categoryName,
                count: 1,
            });
        }
    }

    return Array.from(categories.values());
}

export function getCategoryById(categoryId: string) {
    return getCategories().find((category) => category.id === categoryId);
}

export function extractHeadings(markdown: string): ArticleHeading[] {
    const slugger = new GithubSlugger();
    const headingRegex = /^\s{0,3}(#{1,3})\s+(.+)/;

    return markdown
        .split('\n')
        .map((line) => {
            const match = line.match(headingRegex);
            if (!match) {
                return undefined;
            }

            const level = match[1].length;
            if (level < 1 || level > 3) {
                return undefined;
            }

            const text = match[2].replace(/#+\s*$/, '').trim();
            const id = slugger.slug(text);

            return { id, text, level } satisfies ArticleHeading;
        })
        .filter((heading): heading is ArticleHeading => Boolean(heading));
}
