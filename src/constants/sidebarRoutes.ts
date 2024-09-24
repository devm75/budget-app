import { MdGridView } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { MdAccountBalance } from "react-icons/md";
import { LiaCreditCardSolid } from "react-icons/lia";

// const GridView = () => <MdGridView />;
export const SidebarRoutes = [
  {
    label: "Overview",
    icon: MdGridView,
    link: "/",
  },
  { label: "Transactions", icon: AiOutlineBars, link: "/transactions" },
  {
    label: "Scheduled Transactions",
    icon: LuTimerReset,
    link: "/stransactions",
  },
  { label: "Accounts", icon: MdAccountBalance, link: "accounts" },
  { label: "Credit Cards", icon: LiaCreditCardSolid, link: "ccards" },
  //   { label: "Budgets" },
  //   { label: "Debts" },
  //   { label: "Charts" },
  //   { label: "Calendar" },
  //   { label: "Settings" },
  //   { label: "Dark Mode" },
  //   { label: "Signout" },
];
