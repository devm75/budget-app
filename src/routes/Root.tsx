import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";

export const Root = () => {
  return (
    <div className="outermost-wrapper">
      <Sidebar />
      <Header />
      <div id="detail"></div>
    </div>
  );
};
