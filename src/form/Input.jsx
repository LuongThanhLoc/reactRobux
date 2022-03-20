import { useController } from "react-hook-form";

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="w-full px-3 py-5 text-black transition-all border border-gray-200 rounded-sm outline-none focus:border-blue-600"
      {...props}
      {...field}
    ></input>
  );
};

export default Input;
