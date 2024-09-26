import { PieChartCard } from "@components/Cards/PieChartCard";
import { SummaryCard } from "@components/Cards/SummaryCard";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="db-container">
      <div className="db-card-container-top">
        <SummaryCard balance="1362790.71" creditCards="249.00" />
        <PieChartCard />
        <PieChartCard />
      </div>
    </div>
  );
};
