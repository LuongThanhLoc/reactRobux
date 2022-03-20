import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./Input";
import { Link } from "react-router-dom";
import Button from "./Button";
import useSchema from "./Schema";

const { schema } = useSchema();

const FormRegister = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const submitForm = (e) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(e);
        reset({
          username: "",
          email: "",
          password: "",
          passwordAgain: "",
        });
      }, 5000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full max-w-[93%] flex flex-col gap-y-3 mx-auto mt-5 
      md:max-w-[600px] text-white"
    >
      <h2 className="mb-3 text-2xl text-center">
        Đăng Ký Vào M Store GZ
      </h2>
      <label htmlFor="username" className="md:text-xl">
        Tên Đăng Nhập
      </label>
      <Input
        autoFocus={true}
        id="username"
        name="username"
        control={control}
        type="text"
        placeholder="Vui lòng nhập tên đăng nhập"
      ></Input>
      {errors.username && (
        <p className="md:text-xl text-[red]">{errors.username.message}</p>
      )}

      <label htmlFor="email" className="md:text-xl">
        Email
      </label>
      <Input
        id="email"
        name="email"
        control={control}
        type="email"
        placeholder="Vui lòng nhập email"
      ></Input>
      {errors.email && (
        <p className="md:text-xl text-[red]">{errors.email.message}</p>
      )}

      <label htmlFor="password" className="md:text-xl">
        Mật Khẩu
      </label>
      <Input
        id="password"
        name="password"
        control={control}
        type="password"
        placeholder="Vui lòng nhập mật khẩu"
      ></Input>
      {errors.password && (
        <p className="md:text-xl text-[red]">{errors.password.message}</p>
      )}

      <label
        htmlFor="passwordAgain"
        className="capitalize md:text-xl"
      >
        Nhập lại mật khẩu
      </label>
      <Input
        id="passwordAgain"
        name="passwordAgain"
        control={control}
        type="password"
        placeholder="Nhập lại mật khẩu"
      ></Input>

      {errors.passwordAgain && (
        <p className="md:text-xl text-[red]">{errors.passwordAgain.message}</p>
      )}

      <Button
        disable={isSubmitting}
        className={`${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full animate-spin border-t-transparent"></div>
        ) : (
          "Đăng Nhập"
        )}
      </Button>

      <p className="flex mx-auto text-center capitalize gap-x-2">
        Bạn đã có tài khoản hãy ?
        <Link to={"/dang-nhap"} className="text-blue-500">
          Đăng Nhập
        </Link>
      </p>
       <p className="flex mx-auto text-center capitalize gap-x-2">
          Quay lại 
          <Link to={"/"} className="text-blue-500">
            Trang chủ
          </Link>
        </p>
    </form>
  );
};

export default FormRegister;
