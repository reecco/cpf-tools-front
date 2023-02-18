import { InputProps } from "../../utils/types";

function InputMask({ className, type, id, placeholder, value, name, onChange }: InputProps) {
  return (
    <input
      type={type}
      className={className}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputMask;