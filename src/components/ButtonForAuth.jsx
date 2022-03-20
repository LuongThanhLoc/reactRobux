import { Link } from "react-router-dom";

const ButtonForAuth = () => {
  return (
    <div className="lg:fixed lg:right-4 lg:top-4 ">
      <Link to={"/dang-nhap"}>
        <Button>Đăng nhập</Button>
      </Link>
      <Link to={"/dang-ky"}>
        <Button>Đăng ký</Button>
      </Link>
    </div>
  );
};
function Button({ children }) {
  return (
    <button className="px-6 py-3 mr-4 text-lg font-semibold rounded-md cursor-pointer bg-slate-500 hover:bg-slate-600">
      {children}
    </button>
  );
}
export default ButtonForAuth;
