node-crawler-sample
==========


ES6での環境
----------

```
% npm install --save-dev babel-cli babel-core babel-preset-es2015 eslint
% echo '{ "presets": ["es2015"] }' > .babelrc
```


### gulp

[gulp: The Good Parts // Speaker Deck](https://speakerdeck.com/jmblog/gulp-the-good-parts)

gulpを入れてみる(実行用だけのために gulp-cli を global に入れる) npmスクリプトを使う場合はいらないかも
gulpで es2015 をビルドしつつ uglify まで行う

```
npm install --save-dev gulp gulp-babel gulp-uglify

#npm install --save-dev require-dir
```
