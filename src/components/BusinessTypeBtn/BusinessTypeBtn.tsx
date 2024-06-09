import { BusinessTypeCardProps } from "../../types/BusinessTypeBtn";

const BusinessTypeBtn = ({ title, active, onPress }: BusinessTypeCardProps) => {
  return (
    <button
      onClick={onPress}
      className={`flex items-center justify-center xl:rounded-xl xl:text-xs xl:leading-[19.2px] min-w-[146.67px] h-[44px] text-sm font-sf leading-[22.4px] border-[1px] border-border ${
        active
          ? "border-b-2 border-active text-active xl:bg-active xl:text-white font-bold pt-0.5 xl:w-[121px]"
          : "text-text-content"
      }`}
    >
      {title}
    </button>
  );
};

export default BusinessTypeBtn;
