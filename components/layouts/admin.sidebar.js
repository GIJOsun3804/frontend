import Link from 'next/link';
import Image from 'next/image'
import React from 'react'

const AdminSidebar = () =>{
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Miss Wanida padsi</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
        <Link href='/'>
          <a className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
          </a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href='/users'>
          <a className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              ????????????????????????????????????
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
          </Link>
        </li>
        
        <li className="nav-item">
        <Link href='#'>
          <a className="nav-link">
            <i className="nav-icon fas fa-sign-out-alt" />
            <p>
            ??????????????????????????????
              <i className="fas fa-angle-left right" />
            </p>
          </a>
        </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
            <Link href='#'>
              <a className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Logout</p>
              </a>
            </Link>
            </li>
            </ul>
          </li>
          <li className="nav-item">
        <Link href='/register'>
          <a className="nav-link">
            <i className="nav-icon fas fa-user-friends" />
            <p>
              ?????????????????????????????????
              <span className="right badge badge-danger"></span>
            </p>
          </a>
          </Link>
        </li>
          </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>



    )

}
export default AdminSidebar 