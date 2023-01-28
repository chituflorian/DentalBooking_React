import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import "antd/dist/antd-with-locales";
import { ConfigProvider } from "antd";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <BrowserRouter>
        <AuthProvider>
          <App></App>
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
