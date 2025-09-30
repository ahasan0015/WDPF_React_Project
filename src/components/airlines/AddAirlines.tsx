import React from 'react';

function AddAirlines() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Airline</h2>

      <div className="card">
        <div className="card-body">
          <form>
            {/* Airline Name */}
            <div className="mb-3">
              <label htmlFor="airlineName" className="form-label">Airline Name</label>
              <input
                type="text"
                className="form-control"
                id="airlineName"
                placeholder="Enter airline name"
              />
            </div>

            {/* Airline Code */}
            <div className="mb-3">
              <label htmlFor="airlineCode" className="form-label">Airline Code</label>
              <input
                type="text"
                className="form-control"
                id="airlineCode"
                placeholder="e.g., EK, AA, BA"
              />
            </div>

            {/* Country */}
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Enter country"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success">Add Airline</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAirlines;
