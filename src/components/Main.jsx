import Explorer from "./Explorer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Pages from "./Pages";
import SideBar from "./SideBar";
import { useTheme } from "../context/ThemeContext";

function Main() {
  const { theme } = useTheme();
  return (
    <div className={`theme-${theme} h-screen flex flex-col font-sans`}>
      <NavBar />
      <main className="flex flex-1 overflow-hidden">
        <SideBar />
        <Explorer />
        <Pages />
      </main>
      <Footer />
    </div>
  );
}

export default Main;