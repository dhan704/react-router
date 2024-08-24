import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings";
import Usage from "./Pages/Usage";
// import Users from "./Pages/Users";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Details from "./Pages/Details";
import NotFound from "./Pages/NotFound";
import React, { Suspense } from "react";
import Marks from "./Pages/Marks";
import Sports from "./Pages/Sports";
import Remarks from "./Pages/Remarks";
import Login from "./Pages/Login";

{
  /* Dynamic Routing */
}
const MyUsers = React.lazy(() => import("./Pages/Users"));

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      {/* <a href="settings">Settings</a> 
        Disadvantages:- if we use <a></a> tag, html page request happens in network & whole page is is getting refreshed.
        That is not needed, since we have all the code when it is initially loaded.
        we need to change the URL only, we dont need to send request to server & refresh the page. 
        Just need to render react.
        For that we can use history APIs in JS.
        React router have creataed a component using that, which is called <Link>.
        Thus this kind of refresh wont happened. 
        Thus better performance
        */}
      {/* <Header /> */}
      {/* </div> */}
      {/* Dynamic Routing */}
      <Suspense className="page" fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="login" element={<Login />} />

          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="usage" element={<Usage />} />
            <Route path="users" element={<MyUsers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="details/:userId" element={<Details />}>
              {/* <Route path="" element={<Marks />} /> */}
              <Route index element={<Marks />} />
              <Route path="sports" element={<Sports />} />
              <Route path="remarks" element={<Remarks />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
