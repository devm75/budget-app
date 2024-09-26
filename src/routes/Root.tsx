import { Dashboard } from "@components/Dashboard";
import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";
import { useSidebarStore } from "@store/store";

export const Root = () => {
  const { open, toggle } = useSidebarStore((state) => state);

  return (
    <div className="outermost-wrapper">
      <Sidebar />
      <Header />
      <div className={`main-container ${open ? "open" : ""}`}>
        <Dashboard />
      </div>
    </div>
  );
};
