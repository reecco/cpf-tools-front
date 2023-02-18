import { InputProps } from "../../utils/types";

function Input({ className, type, id, placeholder, value, readOnly }: InputProps) {
  return (
    <input 
      type={type} 
      className={className} 
      id={id} 
      placeholder={placeholder} 
      value={value}
      readOnly={readOnly}
    />
  );
}

export default Input;