import withRedux from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import withReduxSaga from "next-redux-saga";
import rootSaga from "../sagas";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    // react-redux의 Provider로 Component 감싸기
    // redux store 사용 가능
    // <Provider store={store}>
    //   <Component {...pageProps} />
    // </Provider>
    <Component {...pageProps} />
  );
}

// 서버사이드에서 데이터 가져오는 구조로 세팅하는 부분
MyApp.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

// redux store config
// redux saga 적용
const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware(); // redux-saga 생성
  const middleWares = [sagaMiddleware]; // 미들웨어 react-thunk나 react-saga 등

  //Compose 를 통해 미들웨어 결합
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middleWares))
      : composeWithDevTools(applyMiddleware(...middleWares));

  // saga 적용된 store 생성
  const store = createStore(reducer, initialState, enhancer);

  // store에 rootSaga를 넣은 sagaMiddleware를 실행
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

// export default MyApp;

// store는 withRedux를 통해 props로 주입
// export default withRedux(configureStore)(MyApp);

// redux와 redux-saga 동시 적용
export default withRedux(configureStore)(withReduxSaga(MyApp));
