import { Outlet, NavLink } from "react-router-dom";
import { MdTimeline, MdBarChart, MdPublic, MdOutlineLanguage } from "react-icons/md"
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1><MdOutlineLanguage/>World Growth</h1>
        <nav>
          <ul>
            <li>
              
              <NavLink 
                to={`/timeline`} 
                className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }>
              <MdTimeline/>
              Timeline
              </NavLink>
            </li>
            <li>
              <NavLink 
                  to={`/growthrate`} 
                  className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }>
                <MdBarChart/>
                Growth Rate
              </NavLink>
            </li>
            <li>
              <NavLink 
                  to={`/worldpercentage`} 
                  className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }>
                <MdPublic/>
                World Percentage
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Header />
        <Outlet />
      </div>
    </>
  );
}