/**
 * _document는 SEO를 잘 할수 있도록 html의 document구조를 그대로 가져와서 만들어놓은 것
 */

import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <title>React Practice</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1"
          />
          {/* 스타일시트 링크 */}
          {/* 웹폰트 임포팅 */}
          {/* 메타 설정 */}
        </Head>
        <body>
          {/* 라우터에 해당하는 페이지가 랜더링 되는 부분 */}
          <Main />

          {/* Next관련 자바스크립트 파일 */}
          <NextScript />
        </body>
      </html>
    );
  }
}

// import Document, { Head, Main, NextScript } from "next/document";
// // Import styled components ServerStyleSheet
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     // Step 1: Create an instance of ServerStyleSheet
//     const sheet = new ServerStyleSheet();

//     // Step 2: Retrieve styles from components in the page
//     const page = renderPage((App) => (props) =>
//       sheet.collectStyles(<App {...props} />)
//     );

//     // Step 3: Extract the styles as <style> tags
//     const styleTags = sheet.getStyleElement();

//     // Step 4: Pass styleTags as a prop
//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <html>
//         <Head>
//           {/* Step 5: Output the styles in the head  */}
//           <meta charSet="utf-8" />
//           <meta
//             name="viewport"
//             content="initial-scale=1.0, width=device-width"
//           />
//           <title>React Practice</title>
//           {this.props.styleTags}
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }
