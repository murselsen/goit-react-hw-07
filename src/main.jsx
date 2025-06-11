import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate loading={<p>Data loading...</p>} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
