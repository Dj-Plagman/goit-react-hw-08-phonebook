import UserMenu from "./Components/UserMenu/UserMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/Private";
import RestrictedRoute from "./Components/Restricted";
import Contacts from "./Components/Contacts";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import SignupPage from "./Page/SingupPage";
import { useEffect } from "react";
import { useGetUserQuery } from "./redux/operation";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  const { data } = useGetUserQuery();

  useEffect(() => {
    data && dispatch(setUser(data));
  }, [data, dispatch]);

  return (
    <div className="container">
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <UserMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                {<LoginPage />}
              </RestrictedRoute>
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute>
                {<SignupPage />}
              </RestrictedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;