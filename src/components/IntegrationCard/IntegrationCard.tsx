import { IntegrationCardProps } from "../../types/IntegrationCard";
import Switch from "../Switch/Switch";

const IntegrationCard = ({ title, subTitle, active }: IntegrationCardProps) => {
  return (
    <div className="flex justify-between items-center rounded-xl pl-4 pr-5 py-[18px]">
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>

      <Switch isActive={active} title={title} />
    </div>
  );
};

export default IntegrationCard;
