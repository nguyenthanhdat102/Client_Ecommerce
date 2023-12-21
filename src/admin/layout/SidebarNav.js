import React from "react";
import { NavLink, Link } from "react-router-dom";

import LogoUrl from "../assets/images/logos/dark-logo.svg";
import menu from "../../helper/menuAdmin";

const SidebarNav = ({ onChangeMenu }) => {
   return (
      <>
         <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div>
               <div className="brand-logo d-flex align-items-center justify-content-between">
                  <Link to="/admin" className="text-nowrap logo-img">
                     <img src={LogoUrl} width={180} alt="" />
                  </Link>
                  <div
                     className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                     id="sidebarCollapse"
                     onClick={() => onChangeMenu(false)}
                  >
                     <i className="ti ti-x fs-8" />
                  </div>
               </div>
               {/* Sidebar navigation*/}
               <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                  <ul id="sidebarnav">
                     {menu.map((menuItem, index) => {
                        return (
                           <>
                              <li
                                 className="nav-small-cap"
                                 key={`${index}-${menuItem.title}`}
                              >
                                 <i className="ti ti-dots nav-small-cap-icon fs-4" />
                                 <span className="hide-menu">
                                    {menuItem.title}
                                 </span>
                              </li>
                              {menuItem.children.length > 0 &&
                                 menuItem.children.map((childItem, i) => {
                                    return (
                                       <li
                                          className="sidebar-item"
                                          key={`${index}-${i}-${childItem.title}`}
                                       >
                                          <NavLink
                                             className="sidebar-link"
                                             to={childItem.link}
                                             end
                                          >
                                             <span>
                                                <i className={childItem.icon} />
                                             </span>
                                             <span className="hide-menu">
                                                {childItem.title}
                                             </span>
                                          </NavLink>
                                       </li>
                                    );
                                 })}
                           </>
                        );
                     })}
                  </ul>
               </nav>
               {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
         </aside>
      </>
   );
};

export default SidebarNav;
