import React, { useState,useContext,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import homeContext from '../context/user/HomeContext';

// import nav-link dropdown-toggle pulse p-0


export default function Home(props) {
    

    const [active , setactive] = useState(false)

    const drop = () =>{
        let temp = !active ;
        console.log(active)
        setactive(temp);
    }

    let navigate = useNavigate();

    const context = useContext(homeContext);

    const {user,getUsers} = context;

    useEffect(() => {
        if(localStorage.getItem('token')){
            getUsers()
            console.log(user)
        }else{
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])


  return (
    <div id="mytask-layout" className="theme-indigo">
    
    
    <div className="sidebar px-4 py-4 py-md-5 me-0">
        <div className="d-flex flex-column h-100">
            <a href="index.html" className="mb-0 brand-icon">
                <span className="logo-icon">
                    <svg  width="35" height="35" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>
                </span>
                <span className="logo-text">My-Task</span>
            </a>
            
            <ul className="menu-list flex-grow-1 mt-3">
                <li><a className="m-link" href="../index.html"><i className="icofont-ui-home"></i><span>Home</span></a>
                </li>
                <li className="collapsed">
                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Authentication" href="#"><i
                            className="icofont-ui-lock"></i> <span>Authentication</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                    
                    <ul className="sub-menu collapse" id="menu-Authentication">
                        <li><a className="ms-link" href="auth-signin.html"><span>Sign in</span></a></li>
                        <li><a className="ms-link" href="auth-signup.html"><span>Sign up</span></a></li>
                        <li><a className="ms-link" href="auth-password-reset.html"><span>Password reset</span></a></li>
                        <li><a className="ms-link" href="auth-two-step.html"><span>2-Step Authentication</span></a></li>
                        <li><a className="ms-link" href="auth-404.html"><span>404</span></a></li>
                    </ul>
                </li>
                <li><a className="m-link active" href="index.html"><i className="icofont-code"></i> <span>Stater page</span></a></li>
                <li className="collapsed">
                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Components" href="#"><i
                            className="icofont-paint"></i> <span>UI Components</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                    
                    <ul className="sub-menu collapse" id="menu-Components">
                        <li><a className="ms-link" href="ui-alerts.html"><span>Alerts</span> </a></li>
                        <li><a className="ms-link" href="ui-badge.html"><span>Badge</span></a></li>
                        <li><a className="ms-link" href="ui-breadcrumb.html"><span>Breadcrumb</span></a></li>
                        <li><a className="ms-link" href="ui-buttons.html"><span>Buttons</span></a></li>
                        <li><a className="ms-link" href="ui-card.html"><span>Card</span></a></li>
                        <li><a className="ms-link" href="ui-carousel.html"><span>Carousel</span></a></li>
                        <li><a className="ms-link" href="ui-collapse.html"><span>Collapse</span></a></li>
                        <li><a className="ms-link" href="ui-dropdowns.html"><span>Dropdowns</span></a></li>
                        <li><a className="ms-link" href="ui-listgroup.html"><span>List group</span></a></li>
                        <li><a className="ms-link" href="ui-modal.html"><span>Modal</span></a></li>
                        <li><a className="ms-link" href="ui-navs.html"><span>Navs</span></a></li>
                        <li><a className="ms-link" href="ui-navbar.html"><span>Navbar</span></a></li>
                        <li><a className="ms-link" href="ui-pagination.html"><span>Pagination</span></a></li>
                        <li><a className="ms-link" href="ui-popovers.html"><span>Popovers</span></a></li>
                        <li><a className="ms-link" href="ui-progress.html"><span>Progress</span></a></li>
                        <li><a className="ms-link" href="ui-scrollspy.html"><span>Scrollspy</span></a></li>
                        <li><a className="ms-link" href="ui-spinners.html"><span>Spinners</span></a></li>
                        <li><a className="ms-link" href="ui-toasts.html"><span>Toasts</span></a></li>
                        <li><a className="ms-link" href="ui-tooltips.html"><span>Tooltips</span></a></li>
                    </ul>
                </li>
                <li><a className="m-link" href="documentation.html"><i className="icofont-law-document"></i>
                        <span>Documentation</span></a></li>
                <li><a className="m-link" href="changelog.html"><i className="icofont-edit"></i> <span>Changelog</span> <span
                        className="ms-auto small-14 fw-bold">v1.0.0</span></a></li>
            </ul>

            
            <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center justify-content-center">
                    <div className="form-check form-switch theme-switch">
                        <input className="form-check-input" type="checkbox" id="theme-switch"/>
                        <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                    </div>
                </li>
                <li className="d-flex align-items-center justify-content-center">
                    <div className="form-check form-switch theme-rtl">
                        <input className="form-check-input" type="checkbox" id="theme-rtl"/>
                        <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                    </div>
                </li>
            </ul>
            
            <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                <span className="ms-2"><i className="icofont-bubble-right"></i></span>
            </button>
        </div>
    </div>

    
    <div className="main px-lg-4 px-md-4">
        
        <div className="header">
            <nav className="navbar py-4">
                <div className="container-xxl">
    
                    
                    <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                        <div className="d-flex">
                            <a className="nav-link text-primary collapsed" href="help.html" title="Get Help">
                                <i className="icofont-info-square fs-5"></i>
                            </a>
                            
                        </div>
                        <div className="dropdown notifications zindex-popover">
                            <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="icofont-alarm fs-5"></i>
                                <span className="pulse-ring"></span>
                            </a>
                            <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                                <div className="card border-0 w380">
                                    <div className="card-header border-0 p-3">
                                        <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                            <span>Notifications</span>
                                            <span className="badge text-white">11</span>
                                        </h5>
                                    </div>
                                    <div className="tab-content card-body">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-unstyled list mb-0">
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="../assets/images/xs/avatar1.jpg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">{user.ename}</span> <small>2MIN</small></p>
                                                            <span className="">Added  2021-02-19 my-Task ui/ux Design <span className="badge bg-success">Review</span></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <div className="avatar rounded-circle no-thumbnail">DF</div>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                            <span className="">Task added Get Started with Fast Cad project</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="../assets/images/xs/avatar3.jpg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                            <span className="">Quality Assurance Task Completed</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="../assets/images/xs/avatar5.jpg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                            <span className="">Add New Project for App Developemnt</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="../assets/images/xs/avatar6.jpg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                            <span className="">Add Timesheet For Rhinestone project</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="../assets/images/xs/avatar7.jpg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Zoe Wright</span> <small className="">1DAY</small></p>
                                                            <span className="">Add Calander Event</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="card-footer text-center border-top-0" href="#"> View all notifications</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                            <div className="u-info me-2">
                                <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">{user.ename}</span></p>
                                <small>Admin Profile</small>
                            </div>
                            <Link className="nav-link dropdown-toggle pulse p-0" to="/" role="button" data-bs-toggle="dropdown" data-bs-display="static" onClick={drop}>
                                <img className="avatar lg rounded-circle img-thumbnail" src="../assets/images/profile_av.png" alt="profile"/>
                            </Link>
                         
    {active === true ? 
                                <div className="card border-0 w280">
                                    <div className="card-body pb-0">
                                        <div className="d-flex py-1">
                                            <img className="avatar rounded-circle" src="../assets/images/profile_av.png" alt="profile"/>
                                            <div className="flex-fill ms-3">
                                                <p className="mb-0"><span className="font-weight-bold">{user.ename}</span></p>
                                                <small className="">{user.egmail}</small>
                                            </div>
                                        </div>
                                        
                                        <div><hr className="dropdown-divider border-dark"/></div>
                                    </div>
                                    <div className="list-group m-2 ">
                                        <Link to="/login" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3"></i>Signout</Link>
                                        <Link to="/signup" className="list-group-item list-group-item-action border-0 "><i className="icofont-contact-add fs-5 me-3"></i>Add personal account</Link>
                                    </div>
                                </div>
                             : <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0"></div> }
                            
                        </div>
                    </div>
                    
    
                    
                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3 ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                        <span className="fa fa-bars"></span>
                    </button>
    
                    
                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                        <div className="input-group flex-nowrap input-group-lg">
                            <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></button>
                            <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                            
                        </div>
                    </div>
    
                </div>
            </nav>
        </div>

        
        <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
                <div className="col-12">
                    <div className="card mb-3">
                        <div className="card-body text-center p-5">
                            <img src="../assets/images/no-data.svg" className="img-fluid mx-size" alt="No Data"/>
                            <div className="mt-4 mb-2">
                                <span className="text-muted">No data to show</span>
                            </div>
                            <button type="button" className="btn btn-white border lift mt-1">Get Started</button>
                            <button type="button" className="btn btn-primary border lift mt-1">Back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
