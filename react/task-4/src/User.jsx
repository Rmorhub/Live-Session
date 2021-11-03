/* eslint-disable class-methods-use-this */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { usersId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${usersId}`)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then(user => {
        setUserData({
          avatarUrl: user.avatar_url,
          userName: user.name,
          userLocation: user.location,
        });
      });
  }, [usersId]);

  if (!userData) {
    return null;
  }

  const { avatarUrl, userName, userLocation } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};

// class User extends React.Component {
//   state = {
//     avatarUrl: null,
//     userName: null,
//     userLocation: null,
//   };

//   componentDidMount() {
//     console.log('componentDidMount was called');

//     this.updateUserData(this.props.match.params.usersId);
//   }

//   componentDidUpdate(prevProps) {
//     console.log('componentDidUpdate was called');

//     const currentUserId = this.props.match.params.usersId;

//     if (currentUserId !== prevProps.match.params.usersId) {
//       this.updateUserData(currentUserId);
//     }
//   }

//   updateUserData = userId => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(responce => {
//         if (responce.ok) {
//           return responce.json();
//         }
//       })
//       .then(userData => {
//         this.setState({
//           avatarUrl: userData.avatar_url,
//           userName: userData.name,
//           userLocation: userData.location,
//         });
//       });
//   };

//   render() {
//     console.log('render was called');

//     const { avatarUrl, userName, userLocation } = this.state;

//     if (!avatarUrl || !userName || !userLocation) {
//       return null;
//     }
//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{userName}</span>
//           <span className="user__location">{userLocation}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
