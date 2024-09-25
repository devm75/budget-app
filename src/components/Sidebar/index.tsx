import { MdGridView } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { MdAccountBalance } from "react-icons/md";
import { LiaCreditCardSolid } from "react-icons/lia";
import { useSidebarStore } from "../../store/store";
import { Link } from "react-router-dom";

// const GridView = () => <MdGridView />;
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
  const sidebarStatus = useSidebarStore((state) => state.open);

  if (sidebarStatus)
    return (
      <div id="sidebar">
        <aside>
          <nav>
            <ul>
              {SidebarRoutes.map(({ label, link, Icon }) => (
                <Link to={link}>
                  <li key={label}>
                    <span> {Icon}</span> {label}
                  </li>
                </Link>
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
  else return null;
};
