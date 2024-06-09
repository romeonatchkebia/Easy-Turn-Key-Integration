import { BusinessTypeCardProps } from "../../types/BusinessTypeBtn";

const BusinessTypeBtn = ({ title, active, onPress }: BusinessTypeCardProps) => {
  return (
    <button
      onClick={onPress}
      className={`flex items-center justify-center min-w-[146.67px] h-[44px] bg-blue-400 text-sm font-sf leading-[22.4px] ${
        active ? "border-b-2 border-active text-active font-bold" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default BusinessTypeBtn;
