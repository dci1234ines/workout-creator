import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/abdomen" activeClassName="active">Abdomen Workouts</NavLink>
        </li>
        <li>
          <NavLink to="/glutes" activeClassName="active">Glutes Workouts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
