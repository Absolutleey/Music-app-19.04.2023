import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { authContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { registerSubmit } = useContext(authContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confPass: "",
    },
    registerSubmit
  );

  return (
    <section id="registerPage">
      <form method="POST" onSubmit={onSubmit} >
        <fieldset>
          <legend>Register</legend>

          <label htmlFor="email" className="vhide">
            Email
          </label>
          <input
            id="email"
            className="email"
            name="email"
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
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />

          <label htmlFor="confPass" className="vhide">
            Confirm Password:
          </label>
          <input
            id="confPass"
            className="confPass"
            name="confPass"
            type="password"
            placeholder="Confirm Password"
            value={values.confPass}
            onChange={changeHandler}
          />

          <button type="submit" className="register">
            Register
          </button>

          <p className="field">
            <span>
              If you already have profile click <Link to={"/login"}>here</Link>
            </span>
          </p>
        </fieldset>
      </form>
    </section>
  );
};
