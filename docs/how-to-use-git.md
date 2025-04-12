# Pull Request を作るまでの流れ

1. ます、作業を始める前に以下のコマンドを打ちます

```sh
git switch -c ブランチ名

# example
# git switch -c task-list-html
```

タスク一覧の html を作るブランチならこんな感じ

2. 修正したファイルを staging にします

```sh
git add 修正したファイルのパス

# example
# git add views/tasks/index.ejs
```

3. staging に入れたファイル達を commit します

```sh
git commit -m "コミットメッセージ"
# example
# git commit -m "タスク一覧のejsを作成"
```

4. 最後にリモート(クラウド上)に保存します

```sh
git push

# リモートブランチがない場合、エラーが発生するが打てば良いコマンドを教えてくれる
# それをコピペしてもう一度打てばOK
```

5. Pull Request をブラウザ上の GitHub で作成する

レビューで approve されたら Pull Request 作成者がマージして終了。
ローカル(自分の PC)上の main ブランチも`git pull`を実行して最新にしておこう。
