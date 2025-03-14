import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop /> {/* ✅ This ensures scroll resets on navigation */}
      <Outlet /> {/* Renders the current route's component */}
    </>
  );
};

export default Layout;