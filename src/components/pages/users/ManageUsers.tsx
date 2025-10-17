import { Link } from "react-router-dom";
import api from "../../../Config";
import { useEffect, useState } from "react";
import type { User } from "../../../interfaces/user.interface";

function ManageUsers() {
  const [users, setUsers] = useState<User[]>([]);

  // কম্পোনেন্ট লোড হলে ইউজার লিস্ট আনা
  useEffect(() => {
    document.title = "Manage Users";
    getUsers();
  }, []);

  // সব ইউজার আনা
  const getUsers = () => {
    api
      .get("users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  };

  // ইউজার ডিলিট করা
  const handleDelete = (user_id: number) => {
    api
      .delete(`delete-user?id=${user_id}`)
      .then((res) => {
        console.log("Deleted:", res.data);
        // ডিলিট হওয়ার পর লিস্ট রিফ্রেশ করা
        getUsers();
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  return (
    <>
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
                  <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <div className="d-flex gap-1">
                        <Link
                          to={`/users/${user.user_id}`}
                          className="btn btn-icon btn-outline-info"
                        >
                          <i className="bx bx-search"></i>
                        </Link>
                        <Link
                          to={`/users/edit/${user.user_id}`}
                          className="btn btn-icon btn-outline-primary"
                        >
                          <i className="bx bx-edit"></i>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-icon btn-outline-danger"
                          onClick={() =>
                            confirm("Are you sure to delete this?") &&
                            handleDelete(user.user_id)
                          }
                        >
                          <i className="bx bx-trash"></i>
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
    </>
  );
}

export default ManageUsers;
