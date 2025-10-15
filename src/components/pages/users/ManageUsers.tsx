import { Link } from "react-router-dom";
import api from "../../../Config";
import { useEffect, useState } from "react";
import type { User } from "../../../interfaces/user.interface";

function ManageUsers() {
  const [user, setUsers] = useState<User[]>([]);
 
  // const [userId, setUserId]=useState<number | undefined> (0);

  //first load all data form getUsers() api
  useEffect(() => {
    document.title = "Manage Users";
    getUserss();
  }, []);

  const getUserss = () => {
    api
      .get(`users`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function handleDelete(id:any){
    console.log(id +"confirm delete");
  }

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
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                user.map((item) => (
                  <tr key={item.user_id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.phone}</td>
                    <td>
                      <div className="d-flex gap-1">
                        <Link to="/users/1" className="btn btn-icon btn-outline-info">
                          <i className="bx bx-search"></i>
                        </Link>
                        <Link to="/users/edit/1"className="btn btn-icon btn-outline-primary">
                          <i className="bx bx-edit"></i>
                        </Link>
                        <button type="button" className="btn btn-icon btn-outline-danger" onClick={handleDelete}>
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
