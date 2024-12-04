import { RouterProvider } from "react-router-dom";
import { router } from "./Router1";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </Provider>
    </>
  );
}

export default App;
