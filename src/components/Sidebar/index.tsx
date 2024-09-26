/// <reference types="react/canary" />
import { MdGridView } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { MdAccountBalance } from "react-icons/md";
import { LiaCreditCardSolid } from "react-icons/lia";
import { useSidebarStore } from "../../store/store";
import { Link } from "react-router-dom";
import { useIsMobile } from "@hooks/useIsMobile";
import { useEffect } from "react";


const SidebarRoutes = [
  {
    label: "Overview",
    Icon: <MdGridView />,
    link: "/",
  },
  { label: "Transactions", Icon: <AiOutlineBars />, link: "/transactions" },
  {
    label: "Scheduled Transactions",
    Icon: <LuTimerReset />,
    link: "/stransactions",
  },
  { label: "Accounts", Icon: <MdAccountBalance />, link: "accounts" },
  { label: "Credit Cards", Icon: <LiaCreditCardSolid />, link: "ccards" },
  //   { label: "Budgets" },
  //   { label: "Debts" },
  //   { label: "Charts" },
  //   { label: "Calendar" },
  //   { label: "Settings" },
  //   { label: "Dark Mode" },
  //   { label: "Signout" },
];

export const Sidebar = () => {
  const {
    open: isOpen,
    closeSidebar,
    openSidebar,
  } = useSidebarStore((state) => state);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }, [isMobile]);

  if (isMobile && isOpen) {
    return (
      <div
        onClick={closeSidebar}
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
      >
        <div className="sidebar-responsive">
          <aside>
            <nav>
              <ul>
                <h1 className="app-heading">Budget App</h1>
                {SidebarRoutes.map(({ label, link, Icon }) => (
                  <Link key={label} to={link}>
                    <li key={label}>
                      <span> {Icon}</span> {label}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <aside>
        <nav>
          <ul>
            <h1 className="app-heading">Budget App</h1>
            {SidebarRoutes.map(({ label, link, Icon }) => (
              <Link key={label} to={link}>
                <li key={label}>
                  <span> {Icon}</span> {label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
