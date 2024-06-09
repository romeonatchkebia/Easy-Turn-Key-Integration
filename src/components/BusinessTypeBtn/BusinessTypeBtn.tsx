import { BusinessTypeCardProps } from "../../types/BusinessTypeBtn";

const BusinessTypeBtn = ({ title }: BusinessTypeCardProps) => {
  return <div className="min-w-[146.67px]">{title}</div>;
};

export default BusinessTypeBtn;
