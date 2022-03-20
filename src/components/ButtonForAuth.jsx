import { Link } from "react-router-dom";

const ButtonForAuth = () => {
  return (
    <div className="my-4 flex items-center gap-x-3 lg:gap-x-5 mr-3 lg:mr-0">
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
    <button className="w-[100px] py-3 text-sm lg:w-[150px] lg:text-lg font-semibold rounded-md cursor-pointer bg-slate-500 hover:bg-slate-600">
      {children}
    </button>
  );
}
export default ButtonForAuth;
