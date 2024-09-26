import { useSidebarStore } from "@store/store";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const { toggle: toggleSidebar, open: sidebarOpen } = useSidebarStore(
    (state) => state
  );

  return (
    <div className={`header-container ${sidebarOpen ? "" : "sb-closed"}`}>
      <div className="sidebar-toggler">
        <span>
          <FaBars onClick={toggleSidebar} />
        </span>
        <h3>Overview</h3>
      </div>
    </div>
  );
};
