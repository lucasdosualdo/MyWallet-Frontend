import GlobalStyle from "../styles/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MyProfile from "./MyProfile";
import Input from "./Input";
import Output from "./Output";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/input" element={<Input />} />
            <Route path="/output" element={<Output />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
