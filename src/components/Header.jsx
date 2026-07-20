import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ADD_ROUTE, navMenu } from "../constants/routes";

const Header = () => {
    const location = useLocation();
  return (
    <header className="bg-white fixed w-full z-20 top-0 inset-s-0 shadow">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
       <h1 className="text-orange-600 text-xl font-semibold">Reminder</h1>
        <div className="flex sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">
          <Link
            to={ADD_ROUTE}
            className="text-white bg-brand bg-orange-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-sm px-3 py-2 focus:outline-none"
          >
            Add Reminder
          </Link>
         
        </div>
        <nav
          className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1"
          id="navbar-sticky"
        >
          <ul className="flex  p-4 sm:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft sm:space-x-8 rtl:space-x-reverses :flex-row sm:mt-0 sm:border-0 sm:bg-neutral-primary">
         {navMenu.map((menu, index) =>{
           const active = location.pathname == menu.route;
            return (
                 <li key={index} className={active ? "text-orange-500" : ""}>
                <Link to={menu.route} >
                    {menu.label}
                </Link>
            </li>
            )
         })}
          </ul>
        </nav>
        <nav
          className="sm:hidden w-full"
        >
          <ul className="flex mt-2 pt-2 border-t border-gray-200 font-medium gap-4">
         {navMenu.map((menu, index) =>{
           const active = location.pathname == menu.route;
            return (
                 <li key={index} className={active ? "text-orange-500" : ""}>
                <Link to={menu.route} >
                    {menu.label}
                </Link>
            </li>
            )
         })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
