import { useEffect, useState } from "react";
import { SwitchProps } from "../../types/Switch";

const Switch = ({ isActive, title }: SwitchProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center w-[22px] h-[14px] border-2 ${
        active ? "bg-active border-active" : "bg-white border-passive"
      }  rounded-lg px-[2px]`}
    >
      <div
        className={`transition-transform duration-300 ease-in-out transform ${
          active ? "translate-x-[8px] bg-white" : "translate-x-0 bg-passive"
        } rounded-full h-[6px] w-[6px]`}
      />
    </button>
  );
};

export default Switch;
