import React, { useEffect, useState } from 'react';
import apiServices from '../../Admin/apiServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLoader } from "react-spinners";
const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
      apiServices.users()
        .then(response => {
          console.log("The data is:", response.data.data);
          setUsers(response.data.data);
          setTimeout(() => {
            setLoading(true);
          }, 1000);
        })
        .catch(error => {
          console.log("The error is:", error);
        });
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      {loading && (
        <HashLoader
          color={"#3585c1"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "9999",
          }}
        />
      )}
      <h1 className="text-center display-2 dark">Dash Board</h1>
      {0 > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Number</th>
              <th>category</th>
              <th>Deficulty</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
)}

    </div>
  );
};

export default UserList;
