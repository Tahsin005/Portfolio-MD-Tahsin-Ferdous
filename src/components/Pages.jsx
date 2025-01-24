import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className="w-full h-full flex flex-col bg-mainBg">
      <Tabs />
      <section className="flex-1 overflow-y-auto bg-mainBg">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
