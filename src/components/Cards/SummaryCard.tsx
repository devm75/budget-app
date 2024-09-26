import { calDiff, formatAmount } from "@utils/index";

export const SummaryCard = ({
  balance,
  creditCards,
}: {
  balance: string;
  creditCards: string;
}) => {
  return (
    <div className="sc-container">
      <div>
        <span>Summary</span>
        <div className="sc-row">
          <span className="bal-label">Balance:</span>
          <span className="bal-val">${formatAmount(balance)}</span>
        </div>
        <div className="sc-row">
          <span className="cc-label">Credit Cards</span>
          <span className="cc-val">-${formatAmount(creditCards)}</span>
        </div>
        <hr className="half-width"></hr>
        <div className="final-amt">
          <span> ${calDiff(balance, creditCards)}</span>
        </div>
      </div>
    </div>
  );
};
