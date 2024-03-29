# Svelte + Vite + TypeScript + Tailwind.css を使用したサンプル。

Atomic Design + clean architectureに可能な限り沿って書いていきたいですが、不備もあるかと思います。
実装しきれなかった場合は今後改善していきます。

## バックエンド側のリポジトリ

[luka-api](https://github.com/takeuchi-shogo/luka-api)

## プロジェクトの構成

### Atomic Designについて

- pages
　　　- データやテキスト挿入の記述。大きなレイアウトをログイン前後で分ける。APIはここで行う。Routeもここでやりとりする

- templates
　　　- 見た目だけの記述。organismsと組み合わせて構成されたものここで状態を持たせない

- organisms
　　　- atomes, moleculesに依存する。ここで状態を持たせる

- molecules
　　　- UIパーツ。依存先はatomsのみのmarginを持たないコンポーネントで機能は持たせない

- atoms
　　　- UIパーツ。何にも依存しないmarginを持たないコンポーネント

### 追加する機能（現在実装中）

- アカウント新規作成 - Done
- ログイン、ログアウト - Done
- 退会
- ユーザープロフィール編集 - Done
- スレッド検索、投稿、編集、削除 - Done
- コメント取得、投稿、編集、削除

### 予定している機能

- サーバー構築
- 画像投稿
- 専門医などへの質問、チャット
- 課金周り

### 予定しているインフラ環境

- Dokcer採用 → 完了
- AWS採用 → 表示できた。外観がある程度完成すると公開予定です。
