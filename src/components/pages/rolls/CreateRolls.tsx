import { Link } from "react-router-dom";

function CreateRole() {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Roles / </span> Create
        </h4>

        <div className="card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="roleName" className="form-label">Role Name</label>
                <input type="text" className="form-control" id="roleName" placeholder="Enter role name" />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/roles" className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRole;
