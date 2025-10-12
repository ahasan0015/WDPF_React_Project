import { Link } from "react-router-dom";


function ManageUsers() {

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Users / </span> Manage
        </h4>

        <Link to="/users/create" className="btn btn-primary mb-3">Add New User</Link>

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
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Admin</td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link to='/users/1' className="btn btn-icon btn-outline-info">
                        <i className="bx bx-search"></i>
                      </Link>
                      <Link to='/users/edit/1' className="btn btn-icon btn-outline-primary">
                        <i className="bx bx-edit"></i>
                      </Link>
                      <button type="button" className="btn btn-icon btn-outline-danger">
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>User</td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link to='/users/2' className="btn btn-icon btn-outline-info">
                        <i className="bx bx-search"></i>
                      </Link>
                      <Link to='/users/edit/2' className="btn btn-icon btn-outline-primary">
                        <i className="bx bx-edit"></i>
                      </Link>
                      <button type="button" className="btn btn-icon btn-outline-danger">
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageUsers;
