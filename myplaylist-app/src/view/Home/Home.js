import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as authActions from "state/auth/actions";
import { getIsLoggedIn } from "state/auth/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(getIsLoggedIn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFieldChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.login({ username, password }));
  };

  return (
    <div className="ui center aligned container">
      <h1>My Playlist App</h1>
      <p>
        Welcome to MPA. To use this awesome piece of software you must log in.
      </p>
      <div className="ui segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            {!loggedIn && (
              <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={handleFieldChange}
                    />
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleFieldChange}
                    />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <button className="ui blue submit button">Login</button>
              </form>
            )}
          </div>
          <div className="middle aligned column">
            <div className="ui big button">
              <i className="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
};

export default Home;
