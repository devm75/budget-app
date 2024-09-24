import { Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>OverView</Link>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
