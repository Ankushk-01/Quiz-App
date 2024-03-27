import React, { useEffect, useState } from 'react';
import apiServices from './apiServices';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      apiServices.customers()
        .then(response => {
          console.log("The data is:", response.data.data);
          setUsers(response.data.data);
        })
        .catch(error => {
          console.log("The error is:", error);
        });
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center display-2 text-dark">User List</h1>
      {users.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Class Name</th>
              <th>Roll Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              if (user.userType === 2) {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.className}</td>
                    <td>{user.rollNumber}</td>
                    <td>{user.address}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
