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
        {/* <li className="nav-item">
          <Link to={"/products"} className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-shopping menu-icon"></i>
            </span>
            <span className="menu-title">Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/category"} className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </span>
            <span className="menu-title">Category</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/users"} className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-account menu-icon"></i>
            </span>
            <span className="menu-title">Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/rolls"} className="nav-link">
            <span className="icon-bg">
              <i className="mdi mdi-account-group menu-icon"></i>
            </span>
            <span className="menu-title">Rolls</span>
          </Link>
        </li> */}

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
                <Link to={'manage-airlines'} className="nav-link">
                  🛫 View Airlines
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/add-airlines'} className="nav-link" >
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
                <a className="nav-link" href="/airports/view">
                  🛫 View Airports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/airports/add">
                  ➕ Add Airports
                </a>
              </li>
            </ul>
          </div>


        </li>

      </ul>
    </>
  );
}
export default Sidebar;
