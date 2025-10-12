import { Link } from "react-router-dom";

function ManageRoles() {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Roles / </span> Manage
        </h4>

        <Link to="/roles/create" className="btn btn-primary mb-3">Add New Role</Link>

        <div className="card">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Role Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Admin</td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link to='' className="btn btn-icon btn-outline-info">
                        <span className="tf-icons bx bx-search"></span>
                      </Link>
                      <Link to='' className="btn btn-icon btn-outline-primary">
                        <span className="tf-icons bx bx-edit"></span>
                      </Link>
                      <button type="button" className="btn btn-icon btn-outline-danger">
                        <span className="tf-icons bx bx-trash"></span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>User</td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link to='' className="btn btn-icon btn-outline-info">
                        <span className="tf-icons bx bx-search"></span>
                      </Link>
                      <Link to='' className="btn btn-icon btn-outline-primary">
                        <span className="tf-icons bx bx-edit"></span>
                      </Link>
                      <button type="button" className="btn btn-icon btn-outline-danger">
                        <span className="tf-icons bx bx-trash"></span>
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

export default ManageRoles;
