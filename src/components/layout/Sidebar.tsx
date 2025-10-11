import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="nav">
        <li className="nav-item nav-category">Main</li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-home menu-icon"></i>
            </span>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        {/* Users */}
        <li className="nav-item">
          <Link to="users" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-account menu-icon"></i>
            </span>
            <span className="menu-title">Users</span>
          </Link>
        </li>

        {/* Roles */}
        <li className="nav-item">
          <Link to="/roles" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-account-key menu-icon"></i>
            </span>
            <span className="menu-title">Roles</span>
          </Link>
        </li>

        {/* Flight Management Section */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#flight-management"
            aria-expanded="false"
            aria-controls="flight-management"
          >
            <span className="icon-bg">
              <i className="mdi mdi-airplane-takeoff menu-icon"></i>
            </span>
            <span className="menu-title"> Manage Flight</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="flight-management">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link to="/flight-management" className="nav-link">
                  ✈️ View Flights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/flight-add" className="nav-link">
                  ➕ Add New Flight
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Airlines Section */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#airlines"
            aria-expanded="false"
            aria-controls="airlines"
          >
            <span className="icon-bg">
              <i className="mdi mdi-airplane-takeoff menu-icon"></i>
            </span>
            <span className="menu-title">Airlines</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="airlines">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link to={"manage-airlines"} className="nav-link">
                  🛫 View Airlines
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-airlines"} className="nav-link">
                  ➕ Add Airlines
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* Airport Section */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#airports"
            aria-expanded="false"
            aria-controls="airports"
          >
            <span className="icon-bg">
              <i className="mdi mdi-airplane-takeoff menu-icon"></i>
            </span>
            <span className="menu-title">Airports</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="airports">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link to={'/view/airports'} className="nav-link">
                  🛫 View Airports
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/add/airports'} className="nav-link">
                  ➕ Add Airports
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#bookings"
            aria-expanded="false"
            aria-controls="bookings"
          >
            <span className="icon-bg">
              <i className="mdi mdi-book-open-page-variant menu-icon"></i>
            </span>
            <span className="menu-title">Bookings</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="bookings">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link to={"/bookings"} className="nav-link">
                  📄 View Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/booking-flights"} className="nav-link">
                  ✈️ Booking Flights
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Payments */}
        <li className="nav-item">
          <Link to="/payments" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-credit-card menu-icon"></i>
            </span>
            <span className="menu-title">Payments</span>
          </Link>
        </li>

        {/* Passengers */}
        <li className="nav-item">
          <Link to="/passengers" className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-account-multiple menu-icon"></i>
            </span>
            <span className="menu-title">Passengers</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
