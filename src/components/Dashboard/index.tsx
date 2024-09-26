import { SummaryCard } from "@components/Cards/SummaryCard";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="db-container">
      <div className="db-card-container-top">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  );
};
