# 技術構成
- Next.js
- React
- TypeScript
- shadcn/ui

それぞれバージョンは最新(適宜更新)。Nextは `app router` を採用する。

# コンポーネント開発方法
- mainブランチからブランチ切って作業
- `yarn plop` コマンド実行して指示に従って入力
- push前に `yarn lint` コマンド実施
  - Actions(CI)設定できたらする。
- 各UIコンポーネントに必ずStorybook実装
- ディレクトリ構成はとりあえずfeaturesで切る方針(考え中)

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
