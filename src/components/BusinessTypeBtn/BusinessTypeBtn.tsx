import { BusinessTypeCardProps } from "../../types/BusinessTypeBtn";

const BusinessTypeBtn = ({ title, active, onPress }: BusinessTypeCardProps) => {
  return (
    <button
      onClick={onPress}
      className={`flex items-center justify-center lg:rounded-xl lg:text-xs lg:leading-[19.2px] min-w-[146.67px] h-[44px] text-sm font-sf leading-[22.4px] ${
        active
          ? "border-b-2 border-active text-active lg:bg-active lg:text-white font-bold pt-0.5"
          : "text-text-content"
      }`}
    >
      {title}
    </button>
  );
};

export default BusinessTypeBtn;
