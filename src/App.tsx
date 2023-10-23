import React from 'react'
import "./App.css";
import Store from "./config/redux/store";
import AppRouter from "./config/routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
