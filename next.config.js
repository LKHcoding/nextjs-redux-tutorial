//css와 sass를 next에서 동시에 쓰기위한 설정 파일
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withCss(withSass());
