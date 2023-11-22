# project-null
研究室で開催するミニハッカソン用Webアプリ

## セットアップ

```sh
make init
```

`
localhost:3000
`
にアクセス

## 操作
コンテナ起動
```
make up
```

コンテナ停止
```
make down
```

ライブラリを追加する
```
make exec
```
```sh
yarn add XXX
exit
```
```
make cp
```

## 開発ルール

mainブランチへの直接のPushは禁止❌
必ずブランチを切ってからPushすること

また，プッシュ前に必ずリンター，フォーマッターを実行し，コードをチェック
```
make lint-fix
make format
```


