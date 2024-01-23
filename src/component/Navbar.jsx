import { Link } from "react-router-dom";

const menus = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/counter",
    title: "Coutner",
  },
  {
    to: "/loop",
    title: "Loop",
  },
  {
    to: "/todo",
    title: "Todo",
  },
];

const Navbar = () => {
  return (
    <ul className="navbar">
      {menus.map((menu) => (
        <li key={menu.to}>
          <Link to={menu.to}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
