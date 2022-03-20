import * as Yup from "yup";

const useSchema = () => {
  const schema = Yup.object({
    username: Yup.string()
      .required("Vui lòng nhập tên đăng nhập của bạn")
      .min(1, "Tên đăng nhập phải lớn hơn 1 kí tự")
      .max(20, "Tên đăng nhập phải nhỏ hơn 20 kí tự"),
    email: Yup.string()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui lòng nhập email của bạn"),
    password: Yup.string()
      .min(8, "Mật khẩu cần ít nhất 8 kí tự hoặc lớn hơn")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message:
          "Mật khẩu cần ít nhất 8 kí tự và trong đó cần có 1 kí tự in hoa in thường và 1 số",
      })
      .required("Vui lòng nhập mật khẩu của bạn"),
    passwordAgain: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password not match"
    ),
  }).required();
  return { schema };
};

export default useSchema;
