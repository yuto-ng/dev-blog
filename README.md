# 技術構成
- Next.js
- React
- TypeScript
- vanilla-extract

それぞれバージョンは最新(適宜更新)。Nextは `app router` を採用する。

# コンポーネント開発方法
- mainブランチからブランチ切って作業
- `yarn plop` コマンド実行して指示に従って入力
- push前に `yarn lint` コマンド実施
  - Actions(CI)設定できたらする。多分無理
- 各UIコンポーネントに必ずStorybook実装
- ディレクトリ構成はとりあえずfeaturesで切る方針(考え中)

# ディレクトリ構成
src/<br>
├── app/<br>
├── components/<br>
│   ├── ui-elements/<br>
│   └── ui-parts/<br>
├── constants/<br>
│   └── index.ts<br>
├── features/<br>
├── store/<br>
│   ├── atoms.ts<br>
│   ├── recoilKeys.ts<br>
│   └── selectors.ts<br>
├── theme/<br>
└── type/<br>
    └── index.ts<br>
