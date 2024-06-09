import { BusinessTypeBtnData } from "../../types/BusinessTypeBtn";
import { IntegrationCardProps } from "../../types/IntegrationCard";
import Switch from "../Switch/Switch";

const IntegrationCard = ({
  url,
  title,
  subTitle,
  active,
  activeButton,
  setBusinessTypeBtn,
}: IntegrationCardProps) => {
  const handleSwitchPress = () => {
    setBusinessTypeBtn((prev: BusinessTypeBtnData) =>
      prev.map((item) => {
        if (item.title === activeButton) {
          const includesTitle = item.partners.some((item) => item === title);

          if (includesTitle) {
            return {
              ...item,
              partners: item.partners.filter((item) => item !== title),
            };
          } else {
            return {
              ...item,
              partners: [...item.partners, title],
            };
          }
        }

        return item;
      })
    );
  };

  return (
    <div
      className={`flex justify-between items-center border-2 w-full ${
        active ? " border-active" : "border-border"
      }  rounded-xl pl-4 pr-6 py-[18px]`}
    >
      <div className="flex gap-2">
        <img src={url} className="w-12 h-12 rounded" />

        <div>
          <h1 className="font-sf text-base leading-[25.6px]">{title}</h1>
          <h2 className="font-sf text-xs leading-[19.2px]">{subTitle}</h2>
        </div>
      </div>

      <Switch isActive={active} onPress={handleSwitchPress} />
    </div>
  );
};

export default IntegrationCard;
