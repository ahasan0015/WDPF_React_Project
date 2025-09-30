import React from 'react';

function ManageAirlines() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Airlines</h2>

      {/* Add New Airline Form */}
      <div className="card mb-4">
        <div className="card-header">Add New Airline</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="airlineName" className="form-label">Airline Name</label>
              <input
                type="text"
                className="form-control"
                id="airlineName"
                placeholder="Enter airline name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="airlineCode" className="form-label">Airline Code</label>
              <input
                type="text"
                className="form-control"
                id="airlineCode"
                placeholder="e.g. AA, BA, EK"
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Airline</button>
          </form>
        </div>
      </div>

      {/* Existing Airlines Table */}
      <div className="card">
        <div className="card-header">Airline List</div>
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Airline Name</th>
                <th>Airline Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Static rows for now */}
              <tr>
                <td>1</td>
                <td>Emirates</td>
                <td>EK</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>American Airlines</td>
                <td>AA</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              {/* More static rows can be added */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageAirlines;
