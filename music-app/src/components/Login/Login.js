import { useContext } from "react";
import { Link } from "react-router-dom";

import { authContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const loginKeys ={
  email:'email',
  password:'password'
}


export const Login = () => {
  const { loginSubmit } = useContext(authContext);
  const { values, changeHandler, onSubmit } = useForm({
   [loginKeys.email]: "",
    [loginKeys.password]: "",
  },loginSubmit);

  return (
    <section id="loginPage">
      <form method="POST" onSubmit={onSubmit}>
        <fieldset>
          <legend>Login</legend>

          <label htmlFor="email" className="vhide">
            Email
          </label>
          <input
            id="email"
            className="email"
            name={loginKeys.email}
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="password" className="vhide">
            Password
          </label>
          <input
            id="password"
            className="password"
            name={loginKeys.password}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />

          <button type="submit" className="login">
            Login
          </button>

          <p className="field">
            <span>
              If you don't have profile click <Link to={"/register"}>here</Link>
            </span>
          </p>
        </fieldset>
      </form>
    </section>
  );
};
