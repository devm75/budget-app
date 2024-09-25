import { useSidebarStore } from "@store/store";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const sidebarOpen = useSidebarStore((state) => state.open);

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
