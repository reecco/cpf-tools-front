import { FaCopy, FaPaste } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { ButtonProps } from "../../utils/types";

function Button({ className, id, onChange, onClick, value, icon }: ButtonProps) {
  return (
    <button
      className={className}
      id={id}
      onChange={onChange}
      onClick={onClick}
    >
      {icon === 'FaCopy' ? <FaCopy/> : icon === 'FaPaste' ? <FaPaste/> : icon === 'MdClose' ? <MdClose/> : value}
    </button>
  );
}

export default Button;