import { RouterProvider, createRouter } from "@tanstack/react-router";
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConfigProvider } from "antd";
import { theme } from "./antd/config";
import "./normalize.css";

const router = createRouter({ routeTree, context: { auth: undefined } });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} context={{ auth: false }} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
