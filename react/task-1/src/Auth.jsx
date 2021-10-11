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
  };

  spinnerShow = () => {
    this.setState({
      isLoggedIn: null,
    });
    setTimeout(() => this.handleLogin(), 2000);
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isLoggedIn === null) {
      return (
        <div className="panel">
          <Spinner size={40} />
        </div>
      );
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.spinnerShow} />
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
