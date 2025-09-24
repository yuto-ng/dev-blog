# 技術構成
- Next.js
- React
- TypeScript
- shadcn/ui

それぞれバージョンは最新(適宜更新)。Nextは `app router` を採用する。

# コンポーネント開発方法
- mainブランチからブランチ切って作業
- `yarn plop` コマンド実行して指示に従って入力
- 各UIコンポーネントに必ずStorybook実装
- ディレクトリ構成はとりあえずfeaturesで切る方針(考え中)

# 記事の追加方法
- 記事は `content/articles` 配下に `.mdx` ファイルとして追加する
- フロントマターに `title`, `date`, `categoryId`, `categoryName`, `excerpt` などを設定する
- コミットしてデプロイすると自動でカテゴリ一覧・記事詳細ページに反映される

# ディレクトリ構成
src/  
├─ app/  
├─ components/  
│   ├─ ui-elements/  
│   ├─ ui-parts/  
│   └─ organisms/  
├─ constants/  
│   └─ index.ts  
├─ features/  
├─ store/  
│   ├─ atoms.ts  
│   ├─ recoilKeys.ts  
│   └─ selectors.ts  
├─ theme/  
└─ type/  
    └─ index.ts  
