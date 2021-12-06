import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import selectors from "../../redux/selectors";
import { useLogoutMutation } from "../../redux/operation";
import { setLogout } from "../../redux/slice";
import s from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  const userName = useSelector(selectors.getUserName);
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    dispatch(setLogout());
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={s.container}
    >
      <Navbar.Brand></Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/" className={s.name}>
          Home
        </NavLink>

        <NavLink to="/contacts" className={s.name}>
          Contacts
        </NavLink>
      </Nav>

      {isLoggedIn ? (
        <div>
          <span className={s.titleText}>Welcome {userName}!</span>
          <Button
            variant="secondary"
            onClick={handleClick}
            disabled={isLoading}
            className={s.userBtn}
          >
            Log Out
          </Button>
        </div>
      ) : (
        <Nav>
          <Button
            variant="light"
            className="mx-3"
            onClick={() => navigate("/login")}
            className={s.userBtn}
          >
            Log In
          </Button>
          <Button className={s.userBtn} onClick={() => navigate("/signup")}>Sign up</Button>
        </Nav>
      )}
    </Navbar>
  );
}

export default UserMenu;