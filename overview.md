## **課題**

**問題文：**
`/search/:category?sort=price` のようなURLにアクセスしたとき、

- `:category` はURLパラメータとして取得
- `sort` はクエリ文字列として取得
  し、それぞれを画面に表示してください。

**条件：**
(1) `useParams` と `useLocation` を使用すること
(2) URL例：`/search/books?sort=price` → `Category: books / Sort: price` と表示
(3) TailwindCSS の `text-gray-700` を適用すること
