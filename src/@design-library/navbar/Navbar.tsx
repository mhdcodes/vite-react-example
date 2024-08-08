import { Button } from "@design-library/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-base-100 navbar">
      <div className="navbar-start">
        <a className="text-xl btn btn-ghost">daisyUI</a>
      </div>
      <div className="lg:flex hidden navbar-center">
        <ul className="px-1 menu menu-horizontal">
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="blog">Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button />
      </div>
    </div>
  );
}
