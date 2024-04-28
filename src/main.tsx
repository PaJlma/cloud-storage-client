import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ConfigProvider } from "antd";
import { theme } from "./antd/config";

const router = createRouter({
  routeTree,
  context: { isAuthenticated: false },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
