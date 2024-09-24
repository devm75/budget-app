import { Sidebar } from "../components/Sidebar";
import { Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <Sidebar />
      <div id="detail"></div>
    </>
  );
}
