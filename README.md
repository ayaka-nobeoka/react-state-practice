# react-state-practice

# 🧮 React カウントアップアプリ

このアプリは、React の `useState()` を使って「カウントアップ機能」を学ぶための練習アプリです。

---

## 📦 使用技術

- React（Create React App）
- JavaScript (ES6)
- HTML / CSS（基本）

---

## 🚀 起動方法

```bash
git clone git@github.com:ayaka-nobeoka/react-state-practice.git
cd react-state-practice
npm install
npm start
```

# 🧠 React & Git コマンドまとめ

## 📂 ターミナル基本操作（フォルダ・ファイル編）

| コマンド                 | 意味                                         |
| ------------------------ | -------------------------------------------- |
| `pwd`                    | 現在の場所（フォルダパス）を表示             |
| `ls`                     | 現在のフォルダの中身を見る                   |
| `cd フォルダ名`          | 指定フォルダへ移動                           |
| `cd ..`                  | ひとつ上の階層に戻る                         |
| `mkdir フォルダ名`       | 新しいフォルダを作る                         |
| `mv 元の場所 新しい場所` | ファイルやフォルダを移動する（名前変更も可） |
| `rm -rf フォルダ名`      | フォルダを削除（⚠️ 注意して使う！）          |

---

## 🐻 Git 基本操作（バージョン管理）

| コマンド                       | 意味・用途                               |
| ------------------------------ | ---------------------------------------- |
| `git status`                   | 現在の状態を確認（ブランチ、変更の有無） |
| `git branch`                   | ブランチ一覧と現在のブランチを表示       |
| `git checkout ブランチ名`      | ブランチを切り替える                     |
| `git checkout -b 新ブランチ名` | 新しいブランチを作成して切り替える       |
| `git add .`                    | すべての変更をステージに追加             |
| `git commit -m "メッセージ"`   | 変更をコミット（記録）する               |
| `git push origin ブランチ名`   | リモートリポジトリにプッシュ             |
| `git pull origin ブランチ名`   | リモートから最新変更を取り込む           |

---

## 🌱 Git 応用：ブランチ整理・リベース

| コマンド                    | 意味                                         |
| --------------------------- | -------------------------------------------- |
| `git rebase ブランチ名`     | ブランチの履歴を 1 本に整理                  |
| `git pull --rebase`         | プル時にマージせずリベースで取り込む         |
| `git log --oneline --graph` | ブランチの履歴を図で確認（線いっぱいのやつ） |

---

## ✨ よくある Git トラブルと対応

| 問題                                    | 解決方法                                 |
| --------------------------------------- | ---------------------------------------- |
| push で拒否される（非 fast-forward）    | `git pull --rebase` で先に取り込む       |
| pull 時に「どう統合するか決めて」と出る | `git config pull.rebase true` などで設定 |
| マージが複雑になって履歴がぐちゃぐちゃ  | `git rebase` で整理整頓！                |

---

## 📘 例：よく使う流れの例文

```bash
# 1. ブランチ作成＆移動
git checkout -b feature/new-form

# 2. ファイルを編集して保存したら
git add .
git commit -m "フォーム入力機能を追加"

# 3. push
git push origin feature/new-form

# 4. 最新を取り込む（リベース付き）
git pull origin develop --rebase
```
