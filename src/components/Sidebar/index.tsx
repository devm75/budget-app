import { MdGridView } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { MdAccountBalance } from "react-icons/md";
import { LiaCreditCardSolid } from "react-icons/lia";

// const GridView = () => <MdGridView />;
const SidebarRoutes = [
  {
    label: "Overview",
    icon: <MdGridView />,
    link: "/",
  },
  { label: "Transactions", icon: <AiOutlineBars />, link: "/transactions" },
  {
    label: "Scheduled Transactions",
    icon: LuTimerReset,
    link: "/stransactions",
  },
  { label: "Accounts", icon: <MdAccountBalance />, link: "accounts" },
  { label: "Credit Cards", icon: <LiaCreditCardSolid />, link: "ccards" },
  //   { label: "Budgets" },
  //   { label: "Debts" },
  //   { label: "Charts" },
  //   { label: "Calendar" },
  //   { label: "Settings" },
  //   { label: "Dark Mode" },
  //   { label: "Signout" },
];

import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div id="sidebar">
      <aside>
        <nav>
          <ul>
            {SidebarRoutes.map((ele) => (
              <li key={ele?.label}>
                <Link to={ele.link}>
                  <span>{ele?.icon}</span> {ele?.label}
                </Link>
              </li>
            ))}

            {/* <li>
              <Link to={`/transactions`}>Transactions</Link>
            </li>
            <li>
              <Link to={`/budgets`}>Budgets</Link>
            </li>
            <li>
              <Link to={`/pots`}>Pots</Link>
            </li>
            <li>
              <Link to={`/bills`}>Recurring Bills</Link>
            </li> */}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
