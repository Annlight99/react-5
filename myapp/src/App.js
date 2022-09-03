import { Provider } from "react-redux";
import { store } from "./store/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Profile } from "./Profile";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/chats/:1" element={<Chats />}></Route>
          <Route exact path="/chats/:2" element={<Chats />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
