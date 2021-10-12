import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
import './index.scss';

// algo
// 1.show login by default
// 2.after login click - hide login && show Spinner for 2s
// 3.after 2s - hide spinner && show logout
// 4.after logout click hide logout && show login

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProccesing: false,
  };

  loginHandler = () => {
    this.setState({
      isProccesing: true,
    });
    setTimeout(
      () =>
        this.setState({
          isLoggedIn: true,
          isProccesing: false,
        }),
      2000,
    );
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isProccesing } = this.state;
    if (isProccesing) {
      return <Spinner size={40} />;
    }
    return isLoggedIn ? (
      <Logout onLogout={this.logoutHandler} />
    ) : (
      <Login onLogin={this.loginHandler} />
    );
  }
}

export default Auth;

// REACT APPROACH
// 0.make a layout +
// 1.split on components
// 2.static version in react
// 3.declare state and props
// 4.write logic
