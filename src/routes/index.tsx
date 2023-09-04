import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Register, LoginPage, DashboardPage } from "../pages";
import ForgetPasword from "../pages/ForgetPasword";

export default function Router() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" Component={DashboardPage}/>
    <Route path="/login" Component={LoginPage}/>
    <Route path="/register" Component={Register}/>
    <Route path="/forgetpassword" Component={ForgetPasword}></Route>
  </Routes>
  </BrowserRouter>;
}
