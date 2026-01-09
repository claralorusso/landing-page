import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollToTop from "./Scroll-to-top.jsx";

<BrowserRouter>
  <ScrollToTop />
  <App />
</BrowserRouter>

import "./index.css";
import "./App.css";

import { Provider } from "./components/ui/provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
