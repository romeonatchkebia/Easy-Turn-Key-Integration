import { BusinessTypeBtnData } from "../../types/BusinessTypeBtn";
import { IntegrationCardProps } from "../../types/IntegrationCard";
import Switch from "../Switch/Switch";

const IntegrationCard = ({
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
    <div className="flex justify-between items-center rounded-xl pl-4 pr-5 py-[18px]">
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>

      <Switch isActive={active} onPress={handleSwitchPress} />
    </div>
  );
};

export default IntegrationCard;
