# React Router Query String App

React Routerを使用して、**URLパラメータ**と**クエリ文字列**を取得し、画面に表示する練習アプリです。

## 目次

- [概要](#概要)
- [課題](#課題)
- [学習内容](#学習内容)
- [URL構成](#url構成)
- [ディレクトリ構成](#ディレクトリ構成)
- [実装内容](#実装内容)
  - [URLパラメータの取得](#urlパラメータの取得)
  - [クエリ文字列の取得](#クエリ文字列の取得)
  - [画面への表示](#画面への表示)
- [処理の流れ](#処理の流れ)
- [使用技術](#使用技術)
- [起動方法](#起動方法)
- [動作確認](#動作確認)
- [まとめ](#まとめ)

## 概要

`/search/:category?sort=price`のようなURLから、

- `:category`をURLパラメータとして取得
- `sort`をクエリ文字列として取得

し、それぞれの値を画面に表示します。

React Routerの`useParams`と`useLocation`の使い分けを理解することを目的とした練習アプリです。

## 課題

### 問題文

`/search/:category?sort=price`のようなURLにアクセスしたとき、

- `:category`はURLパラメータとして取得
- `sort`はクエリ文字列として取得

し、それぞれを画面に表示してください。

### 条件

1. `useParams`と`useLocation`を使用する
2. URL例：`/search/books?sort=price`
3. `Category: books / Sort: price`と表示する
4. Tailwind CSSの`text-gray-700`を適用する

## 学習内容

この課題では、以下の内容を学習します。

- React RouterのURLパラメータ
- `useParams`
- `useLocation`
- クエリ文字列
- `URLSearchParams`
- `location.search`
- Tailwind CSS
- `??`によるデフォルト値

## URL構成

今回使用するURLは以下です。

```text
/search/:category?sort=price
```

例えば、

```text
/search/books?sort=price
```

にアクセスします。

URLを分解すると、

```text
/search/books?sort=price
       ↑           ↑
       │           │
   URLパラメータ  クエリ文字列
       │           │
    category       sort
       │           │
    "books"      "price"
```

となります。

### URLパラメータ

```text
/search/:category
```

の`:category`がURLパラメータです。

`/search/books`にアクセスすると、

```ts
category === "books"
```

となります。

### クエリ文字列

```text
?sort=price
```

の部分がクエリ文字列です。

`sort`というキーに`price`という値が設定されています。

## ディレクトリ構成

```text
src/
├── components/
│   └── SearchResult.tsx
├── pages/
│   └── Search.tsx
├── types/
│   └── Search.ts
└── App.tsx
```

### 各ファイルの役割

#### `App.tsx`

React Routerのルートを定義します。

#### `pages/Search.tsx`

URLパラメータとクエリ文字列を取得するページコンポーネントです。

- `useParams`
- `useLocation`
- `URLSearchParams`

を使用します。

#### `components/SearchResult.tsx`

取得した`category`と`sort`を画面に表示するコンポーネントです。

#### `types/Search.ts`

`SearchResult`に渡すPropsの型を定義します。

## 実装内容

### URLパラメータの取得

`useParams`を使用して`:category`を取得します。

```tsx
const { category } = useParams<"category">();
```

例えば、

```text
/search/books?sort=price
```

にアクセスすると、

```ts
category === "books"
```

となります。

### クエリ文字列の取得

まず`useLocation`を使用して現在のURL情報を取得します。

```tsx
const location = useLocation();
```

`location.search`には、

```text
?sort=price
```

が入ります。

その後、`URLSearchParams`を使用して`sort`の値を取得します。

```tsx
const searchParams = new URLSearchParams(location.search);
const sort = searchParams.get("sort");
```

結果として、

```ts
sort === "price"
```

となります。

### 画面への表示

取得した値を`SearchResult`コンポーネントへ渡します。

```tsx
<SearchResult
  category={category ?? "未指定"}
  sort={sort ?? "未指定"}
/>
```

`category`または`sort`が`undefined`の場合は、`"未指定"`を表示します。

表示部分にはTailwind CSSの`text-gray-700`を適用します。

```tsx
<p className="text-gray-700">
  Category: {category} / Sort: {sort}
</p>
```

## 処理の流れ

```text
/search/books?sort=price
          ↓
      Search.tsx
          ↓
 ┌────────┴────────┐
 ↓                 ↓
useParams()    useLocation()
 ↓                 ↓
category        location.search
 ↓                 ↓
"books"      "?sort=price"
                    ↓
             URLSearchParams
                    ↓
                 "price"
                    ↓
              SearchResult
                    ↓
Category: books / Sort: price
```

## 使用技術

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS

## 起動方法

### 1. パッケージをインストール

```bash
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

### 3. ブラウザでアクセス

以下のURLにアクセスします。

```text
/search/books?sort=price
```

## 動作確認

### URLパラメータ

以下のURLにアクセスします。

```text
/search/books?sort=price
```

以下のように表示されれば成功です。

```text
Category: books / Sort: price
```

### 別のカテゴリー

```text
/search/movies?sort=rating
```

の場合、

```text
Category: movies / Sort: rating
```

と表示されます。

### Tailwind CSS

表示されているテキストに、

```text
text-gray-700
```

が適用されていることを確認します。

## まとめ

この課題では、URLに含まれる2種類の情報を取得しました。

```text
/search/books?sort=price
       ↓              ↓
  URLパラメータ     クエリ文字列
       ↓              ↓
 useParams()     useLocation()
       ↓              ↓
 category          search
                      ↓
               URLSearchParams
                      ↓
                    sort
```

`useParams`は**URLパラメータを取得するためのHook**、`useLocation`は**現在のURL情報を取得するためのHook**として使い分けます。