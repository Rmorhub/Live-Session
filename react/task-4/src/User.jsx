/* eslint-disable class-methods-use-this */
import React from 'react';

class User extends React.Component {
  state = {
    avatarUrl: null,
    userName: null,
    userLocation: null,
  };

  componentDidMount() {
    console.log('componentDidMount was called');

    this.updateUserData(this.props.match.params.usersId);
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate was called');

    const currentUserId = this.props.match.params.usersId;

    if (currentUserId !== prevProps.match.params.usersId) {
      this.updateUserData(currentUserId);
    }
  }

  updateUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then(userData => {
        this.setState({
          avatarUrl: userData.avatar_url,
          userName: userData.name,
          userLocation: userData.location,
        });
      });
  };

  render() {
    console.log('render was called');

    const { avatarUrl, userName, userLocation } = this.state;

    if (!avatarUrl || !userName || !userLocation) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userName}</span>
          <span className="user__location">{userLocation}</span>
        </div>
      </div>
    );
  }
}

export default User;
