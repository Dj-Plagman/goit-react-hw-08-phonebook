import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/operation";
import { setCredentials } from "../redux/slice";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials(userData));
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className={s.container}>
      <form
        className={s.form}
        name="login_form"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <h2>Log In</h2>
        <div>
          <label className = {s.label}>
            Email
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className = {s.label}>
            Password
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}