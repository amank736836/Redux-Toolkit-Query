import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { myApi } from "./redux/api.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={postsApi}> */}
        <App />
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);
