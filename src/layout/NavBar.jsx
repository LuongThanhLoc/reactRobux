import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useDropdown from "../hooks/useDropdown";
const NavBar = () => {
  const ListPage = [
    {
      id: 1,
      title: "Trang chủ",
      path: "/",
    },
    {
      id: 2,
      title: "Nạp",
      path: "/nap",
    },
    {
      id: 3,
      title: "Cửa hàng",
      path: "/cua-hang",
    },
    {
      id: 4,
      title: "Robux",
      path: "/robux",
    },
    {
      id: 5,
      title: "Acc game",
      path: "/acc-game",
    },
    {
      id: 6,
      title: "Dịch vụ",
      path: "/dich-vu",
    },
  ];
  const { nodeRef, setShow, show } = useDropdown();
  console.log("nodeRef: ", nodeRef);
  return (
    <Fragment>
      <button onClick={() => setShow(!show)}>
        <img srcSet="/menu.jpg 7x" alt="menu" />
      </button>
      <div
        className={`fixed top-0 left-0 flex flex-col h-full w-full pt-10 pl-5 pb-5 border-b-2 border-white bg-slate-900 lg:w-[250px] gap-y-8 lg:border-b-0 lg:border-r-2 transition-all ${
          show ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-x-6">
          <h2 className="pl-5 text-xl font-semibold text-left text-green-600 lg:text-2xl">
            M Stores Gz
          </h2>
          <button
            className="lg:max-w-[40px] cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <img
              src="/closemenu.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </button>
        </div>
        {ListPage.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "bg-slate-500 rounded-md py-3 pl-6" : "pl-6"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </Fragment>
  );
};

export default NavBar;
