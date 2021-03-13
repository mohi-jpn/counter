# なわとびジャッジ教育アプリ

## 最上位の目標

今までにないサービスを提供してなわとび界に貢献すること

## 解決したい課題

- 競技なわとびでレベルの高いジャッジの養成が難しい
- そもそもジャッジ自体が自分がどこまでできているか判断できない/主観的な判断しかできない

## Requirement Table

| Requirement | First Release | Future Release |
|--|--|--|
|ユーザーが適切なフィードバックを得る|MVS1||
|スピード用に使う|MVS1||
|フリースタイル用に使う|||
|ジャッジトレーニングで使える|||
|UI は英語である|PW-H2||
|練習モードはスマホで行う|MVS1||
|結果は保存できて違うタイミングでも見られる|MVS1||

MSV: minimum variable solution

||Buttons(min)|Buttons(max)|
|--|--|--|
|Speed|1<br>step|3<br>False start<br>False switch|
|Difficulty|9<br>Level 0.5+1-8|<-|
|Athlete Presentation|4<br>Miss<br>+/✓/-|<-|
|Routine Presentation|6<br>Entertainment+/✓/-<br>Musicality +/✓/-|<-|
|Required element|4<br>Miss<br>Multiple<br>Wrap/Release<br>Gymnastics/Power|7<br>Space violation<br>Time violation<br>Repeated Skill|

- ユーザーが行うことはおおまかに2つ
  - 練習(practice): 動画を観ながらスマホをタップしてジャッジの練習をする
    - 練習モードの時に動画を載せる必要があるか？ スマホ1台だけで練習→レビューが完結するなら載せる必要アリ

    ![](img/2021-03-14-01-51-44.png)

  - レビュー(review): 練習結果(your result)を答え(correct answer)と照らし合わせる

  ![](img/2021-03-14-01-54-08.png)

  - レビューモードの時はスローで確認したい

  ![](img/2021-03-14-01-54-52.png)
  ![](img/2021-03-14-01-55-06.png)

- ディフィカルティはフリック入力でレベル分けするとスペースを節約できるかも
- 技術的課題
  - スロー再生と追従
  - 時間軸上の任意の点にいける
- テストユーザーに使ってもらって、間違えた個所が何度かトレーニングをした後に間違えないようになるか、検証
