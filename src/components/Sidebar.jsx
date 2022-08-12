import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/sb-admin-2.css";
import "../assets/vendor/fontawesome-free/css/all.min.css";

function Sidebar() {

  const [components, setComponents] = useState(false)
  const [utilities, setUtilities] = useState(false)
  const [pages, setPages] = useState(false)
  
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li class="nav-item ">
        <a class="nav-link">
          <NavLink to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt text-white fw-bold"></i>
            <span className="text-white fw-bold">Dashboard</span>
          </NavLink>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item active">
        <a
          class="nav-link"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          onClick={()=>{setComponents(!components)
            setUtilities(false)
            setPages(false)}}
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          class={`collapse ${components ? 'show' : 'hidden'}`}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item">
                <NavLink to="/buttons" className="fw-bold text-primary text-decoration-none">Buttons</NavLink>
              
            </a>
            <a class="collapse-item active" href="cards.html">
            <NavLink to="/cards" className="fw-bold text-primary text-decoration-none">Cards</NavLink>
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed transitions"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
          onClick={()=>{setUtilities(!utilities)
            setPages(false)
            setComponents(false)}}
        >
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          class={`collapse ${utilities ? 'show' : 'hidden'}`}
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">
            <NavLink to="/colors" className="fw-bold text-primary text-decoration-none">Colors</NavLink>
            </a>
            <a class="collapse-item" href="utilities-border.html">
            <NavLink to="/borders" className="fw-bold text-primary text-decoration-none">Borders</NavLink>
            </a>
            <a class="collapse-item" href="utilities-animation.html">
            <NavLink to="/animations" className="fw-bold text-primary text-decoration-none">Animations</NavLink>
            </a>
            <a class="collapse-item" href="utilities-other.html">
            <NavLink to="/other" className="fw-bold text-primary text-decoration-none">Other</NavLink>
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">Addons</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
          onClick={()=>{
            setPages(!pages)
            setComponents(false)
            setUtilities(false)
          }
            
          }
            
        >
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          class={`collapse ${pages ? 'show' : 'hidden'}`}
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">
            <NavLink to="/login" className="fw-bold text-primary text-decoration-none">Login</NavLink>
            </a>
            <a class="collapse-item" href="register.html">
            <NavLink to="/register" className="fw-bold text-primary text-decoration-none">Register</NavLink>
            </a>
            <a class="collapse-item" href="forgot-password.html">
            <NavLink to="/forgot" className="fw-bold text-primary text-decoration-none">Forgot Password</NavLink>
            </a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">
            <NavLink to="/error" className="fw-bold text-primary text-decoration-none">404 page</NavLink>
            </a>
            <a class="collapse-item" href="blank.html">
            <NavLink to="/blank" className="fw-bold text-primary text-decoration-none">Blank Page</NavLink>
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li class="nav-item">
       
        <a class="nav-link" href="charts.html">
        <NavLink to="/charts">
          <i class="fas fa-fw fa-chart-area text-white fw-bold"></i>
          <span className="text-white fw-bold">Charts</span>
          </NavLink>
        </a>
      </li>
      {/*  */}
      {/* <!-- Nav Item - Tables --> */}
      <li class="nav-item">
        <a class="nav-link" href="tables.html">
        <NavLink to="/tables">
          <i class="fas fa-fw fa-table text-white fw-bold"></i>
          <span className="text-white fw-bold">Tables</span>
          </NavLink>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
