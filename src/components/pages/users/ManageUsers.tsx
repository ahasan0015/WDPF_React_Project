import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../Config";
import type { User } from "../../../interfaces/user.interface";

function ManageUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    document.title = "Manage Users";
    getUsers();
  }, []);

  const getUsers = () => {
    api
      .get("users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

   // 🔹 Delete ফাংশন (তোমার কাঠামো অনুযায়ী)
  function handleDelete(id: any) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    api.delete(`delete-user?id=${id}`)
      .then((res) => {
        console.log(res.data);
        getUsers(); // আবার লিস্ট রিফ্রেশ করো
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Users / </span> Manage
      </h4>

      <Link to="/users/create" className="btn btn-primary mb-3">
        Add New User
      </Link>

      <div className="card">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
              
                  <td>
                    <div className="d-flex gap-1">
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-outline-info btn-sm"
                      >
                        View
                      </Link>
                      <Link
                        to={`/users/edit/${user.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
