import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Callout } from '@/components/mdx/Callout';
import DateLabel from '@/components/ui-parts/DateLabel';
import ShareLabel from '@/components/ui-parts/ShareLabel';
import SideContents from '@/features/SideContents';
import TableOfContents, { type TableOfContentsHeading } from '@/features/TableOfContents';
import { extractHeadings, getAllArticles, getArticleBySlug, getCategories } from '@/lib/articles';
import { compileMDX } from 'next-mdx-remote/rsc';
import { FaFacebookF, FaLine, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const mdxComponents = {
    Callout,
    Link,
};

const profileSection = {
    description:
        '自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。',
    profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
    twitterUrl: 'https://twitter.com/',
};

export function generateStaticParams() {
    return getAllArticles().map((article) => ({
        categoryId: article.categoryId,
        articleId: article.slug,
    }));
}

export function generateMetadata({
    params,
}: { params: { categoryId: string; articleId: string } }) {
    const article = getArticleBySlug(params.articleId);
    if (!article || article.categoryId !== params.categoryId) {
        return {};
    }

    return {
        title: `${article.title} | ${article.categoryName}`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({
    params,
}: {
    params: {
        categoryId: string;
        articleId: string;
    };
}) {
    const article = getArticleBySlug(params.articleId);

    if (!article || article.categoryId !== params.categoryId) {
        notFound();
    }

    const headings: TableOfContentsHeading[] = extractHeadings(article.content);
    const { content } = await compileMDX({
        source: article.content,
        components: mdxComponents,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
            },
        },
    });

    const publishedDate = new Date(article.date);
    const categories = getCategories();
    const sideCategoryLinks = categories.map((category) => ({
        id: category.id,
        title: category.name,
        href: `/category/${category.id}/1`,
    }));

    const articlePath = `/category/${article.categoryId}/article/${article.slug}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
    const shareUrl = siteUrl ? `${siteUrl.replace(/\/$/, '')}${articlePath}` : articlePath;

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 lg:grid lg:grid-cols-[250px,minmax(0,1fr),250px]">
            <div className="hidden lg:block">
                <TableOfContents headings={headings} />
            </div>
            <article className="space-y-10">
                <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
                    <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        <Link href="/" className="text-royalBlue">
                            ホーム
                        </Link>
                        <span aria-hidden>/</span>
                        <Link href={`/category/${article.categoryId}/1`} className="text-royalBlue">
                            {article.categoryName}
                        </Link>
                    </nav>
                    {article.heroImage ? (
                        <div className="relative aspect-[1200/630] overflow-hidden rounded-lg bg-slate-100">
                            <Image
                                src={article.heroImage}
                                alt={article.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 720px, 100vw"
                            />
                        </div>
                    ) : (
                        <div className="flex aspect-[1200/630] items-center justify-center rounded-lg bg-slate-200 text-slate-400">
                            No image
                        </div>
                    )}
                    <header className="space-y-4">
                        <h1 className="text-3xl font-bold leading-tight text-slate-900">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                            <DateLabel postDate={publishedDate} />
                            {article.tags?.length ? (
                                <div className="flex flex-wrap items-center gap-2">
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-royalBlue/30 bg-royalBlue/10 px-3 py-1 text-xs text-royalBlue"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        {article.excerpt ? (
                            <p className="text-base leading-relaxed text-slate-700">
                                {article.excerpt}
                            </p>
                        ) : null}
                    </header>
                    <div className="lg:hidden">
                        <TableOfContents headings={headings} />
                    </div>
                </div>

                <div className="prose prose-slate mx-auto max-w-none rounded-lg bg-white p-6 shadow-sm prose-a:text-royalBlue prose-headings:scroll-mt-24">
                    {content}
                </div>

                <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                    <ShareLabel />
                    <div className="mt-6 flex items-center justify-center gap-6 text-xl text-slate-600">
                        <a
                            href={`https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Xでシェア"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Facebookでシェア"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LINEでシェア"
                        >
                            <FaLine />
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LinkedInでシェア"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </article>
            <div className="mt-10 lg:mt-0 lg:sticky lg:top-28">
                <SideContents profile={profileSection} categories={sideCategoryLinks} />
            </div>
        </div>
    );
}
