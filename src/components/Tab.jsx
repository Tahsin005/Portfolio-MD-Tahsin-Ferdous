import { Link, useLocation } from "react-router-dom";
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, path }) => {
  const router = useLocation();

  return (
    <Link to={path}>
      <div
        className={`flex ${
            router.pathname === path
              ? " border-t-2 border-t-accentColor bg-tabActiveBg"
              : "border-2 bg-tabBg"
          }   min-w-max gap-x-1  border-tabBorder  px-3 text-textColor   md:py-1`}
        >
        <img src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
