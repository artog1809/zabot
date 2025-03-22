import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
}

const InputField = ({
  label,
  register,
  required,
  placeholder,
  ...rest
}: Props) => {
  return (
    <div>
      <label className="block mb-1 text-[14px]">
        {label}
        {required && "*"}
      </label>
      <input
        placeholder={placeholder}
        {...register}
        {...rest}
        className="w-full border-gray-200 border rounded-2xl px-5 py-3 placeholder-gray-500::placeholder"
      />
    </div>
  );
};

export default InputField;
