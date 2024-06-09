import useWindowSize from "../../../hooks/useWindowSize";
import { BodyProps } from "../../../types/Body";
import IntegrationCard from "../../IntegrationCard/IntegrationCard";
import Profile from "../../Profile/Profile";

const Body = ({
  integrationPartners,
  activeButton,
  handleIsIntegrationActive,
  setBusinessTypeBtn,
}: BodyProps) => {
  const { width } = useWindowSize();

  if (!width) return;
  const isLargeScreen = width >= 1280;

  return isLargeScreen ? (
    <div className="flex flex-1 items-center w-full px-20 mt-16 max-h-[299px]">
      <div className="flex flex-col items-center gap-2 overflow-y-scroll h-72 scrollbar-hide w-full max-w-[280px]">
        {integrationPartners.slice(0, 3).map((item) => (
          <IntegrationCard
            key={item.id}
            url={item.url}
            title={item.title}
            subTitle={item.subTitle}
            activeButton={activeButton}
            active={handleIsIntegrationActive(item.title)}
            setBusinessTypeBtn={setBusinessTypeBtn}
          />
        ))}
      </div>

      <Profile isLargeScreen={isLargeScreen} />

      <div className="flex flex-col items-center gap-2 overflow-y-scroll h-72 scrollbar-hide w-full max-w-[280px]">
        {integrationPartners.slice(3).map((item) => (
          <IntegrationCard
            key={item.id}
            url={item.url}
            title={item.title}
            subTitle={item.subTitle}
            activeButton={activeButton}
            active={handleIsIntegrationActive(item.title)}
            setBusinessTypeBtn={setBusinessTypeBtn}
          />
        ))}
      </div>
    </div>
  ) : (
    <Profile isLargeScreen={isLargeScreen} />
  );
};

export default Body;
