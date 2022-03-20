import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const FormLogIn = () => {
  const {
    handleSubmit,
    formState: { isValid, isSubmitting, isSubmitSuccessful },
    control,
  } = useForm();
  const submitForm = (e) => {
    console.log(e);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full max-w-[93%] flex flex-col gap-y-3 mx-auto mt-5 
      md:max-w-[600px] text-white"
      >
        <h2 className="mb-3 text-2xl text-center ">
          Đăng Nhập Vào M Store GZ
        </h2>
        <label htmlFor="username" className=" md:text-xl">
          Tên Đăng Nhập
        </label>
        <Input
          id="username"
          name="username"
          control={control}
          type="text"
          placeholder="Vui lòng nhập tên đăng nhập"
        ></Input>

        <label htmlFor="password" className=" md:text-xl">
          Mật Khẩu
        </label>
        <Input
          id="password"
          name="password"
          control={control}
          type="password"
          placeholder="Vui lòng nhập mật khẩu"
        ></Input>

        <Button>Đăng Nhập</Button>

        <p className="flex mx-auto text-center capitalize gap-x-2">
          Bạn chưa có tài khoản hãy ?
          <Link to={"/dang-ky"} className="text-blue-500">
            Đăng Ký
          </Link>
        </p>
        <p className="flex mx-auto text-center capitalize gap-x-2">
          Quay lại 
          <Link to={"/"} className="text-blue-500">
            Trang chủ
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormLogIn;
