# Todo アプリを Vue.js で作成

## 進め方
1. 雛形のHTML・CSSは事前に作成しているので、app.jsファイルにVue.jsを導入し、『Todoアプリ』を作成しましょう。
1. 最初にTodoに必要な要素は「タイトル」「ID」の２点だけです。(用意しているので新しく作る必要はありません。)
1. 課題の進め方を参考に、順を追って進めてください。
1. 質問、レビューは都度Slackで連絡して頂ければ対応させて頂きます。(用件を最初に``強調``して貰えると助かります。)
## 課題
### 進め方
1. CRUD機能の実装(Read → Create → Update → Delete)の順で進めてください。
1. LocalStorageでデータを保存
1. 余裕のある人向け 要素/機能の追加
> ##### ※参考URLを見ながらやって頂いてもOKです。
### CRUD機能を実装しましょう。
- 読み込み
> 参考： [リストレンダリング](https://jp.vuejs.org/v2/guide/list.html)
- 新規作成
- 削除
- 編集
> 参考： [追加/削除/編集](https://jp.vuejs.org/v2/guide/list.html#%E5%A4%89%E6%9B%B4%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89)

### リロードしても消えない様にしましょう。
- localStorageに保存する
- localStorageから取得する
> 参考： [JavaScriptで連想配列をLocalStorageに保存する時の方法](http://itemy.net/?p=1427)

### 余裕のある人は要素や機能を増やしましょう。
#### ▼要素
- 期限(deadLine)
> 参考： [vuejs-datepicker](https://www.kabanoki.net/2560/)
- ステータス(todo, inProgress, done)など
- 作成日、更新日
- 内容(body)

#### ▼機能
- ソート（ID、期限、ステータス）で並び替え
- フィルター(ID、期限、ステータス)で絞り込み表示
> 参考：[ソート、フィルター](https://jp.vuejs.org/v2/guide/list.html#%E9%85%8D%E5%88%97%E3%81%AE%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88)
- コメント機能
- Todoリストのコンポーネント化
> 参考： [コンポーネントの基本](https://jp.vuejs.org/v2/guide/components.html)


> 参考：[『コンポーネントと v-for』項目を参照](https://jp.vuejs.org/v2/guide/list.html#%E9%85%8D%E5%88%97%E3%81%AE%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88)