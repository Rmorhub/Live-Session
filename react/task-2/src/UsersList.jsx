import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };

  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  render() {
    const { pageNumber, usersPerPage } = this.state;
    const { users } = this.props;

    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={pageNumber}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          usersCount={users.length}
          usersPerPage={3}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
          <User />
        </ul>
      </div>
    );
  }
}

export default UsersList;
