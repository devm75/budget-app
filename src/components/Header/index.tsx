import { FaBars } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="sidebar-toggler">
        <span>
          <FaBars />
        </span>
        <h3>Overview</h3>
      </div>
    </div>
  );
};
