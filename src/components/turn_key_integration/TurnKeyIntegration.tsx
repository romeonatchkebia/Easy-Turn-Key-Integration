import { useEffect, useRef, useState } from "react";
import BusinessTypeBtn from "../BusinessTypeBtn/BusinessTypeBtn";
import IntegrationCard from "../IntegrationCard/IntegrationCard";
import { BusinessTypeBtnData } from "../../types/BusinessTypeBtn";
import sapling from "../../assets/logos/sappling.webp";
import workday from "../../assets/logos/workday.jpeg";
import xero from "../../assets/logos/xero.png";
import rippling from "../../assets/logos/rippling.png";
import Expensify from "../../assets/logos/expensify.png";
import Zenefits from "../../assets/logos/zenefits.webp";
import Header from "./Header/Header";
import Body from "./Body/Body";

const integrationPartners = [
  { id: 1, title: "Sapling", subTitle: "HR Management", url: sapling },
  { id: 2, title: "Workday", subTitle: "HR Management", url: workday },
  { id: 3, title: "Xero", subTitle: "Employers base", url: xero },
  { id: 4, title: "Rippling", subTitle: "Salary Management", url: rippling },
  { id: 5, title: "Expensify", subTitle: "HR Management", url: Expensify },
  { id: 6, title: "Zenefits", subTitle: "HR Management", url: Zenefits },
];

const TurnKeyIntegration = () => {
  const [businessTypeBtn, setBusinessTypeBtn] = useState<BusinessTypeBtnData>([
    { id: 1, title: "Small Business", partners: ["Zenefits"] },
    { id: 2, title: "Medium Business", partners: ["Sapling", "Workday"] },
    { id: 3, title: "Enterprise", partners: [] },
  ]);

  const [activeButton, setActiveButton] = useState<string>("Small Business");
  const containerRef = useRef<HTMLDivElement>(null);

  const chooseBusinessType = (title: string) => {
    setActiveButton(title);
  };

  const handleIsIntegrationActive = (title: string) => {
    let isActive = false;

    const targetItem = businessTypeBtn.find(
      (item) => item.title === activeButton
    );
    if (targetItem) {
      isActive = targetItem.partners.includes(title);
    }

    return isActive;
  };

  useEffect(() => {
    if (containerRef.current) {
      const index = businessTypeBtn.findIndex(
        (item) => item.title === activeButton
      );

      const activeElement = containerRef.current.children[
        index
      ] as HTMLButtonElement;

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeButton, businessTypeBtn]);

  return (
    <div className="h-screen w-screen flex flex-col items-center overflow-y-scroll scrollbar-hide py-12">
      <Header />

      <section className="flex justify-center w-screen border-b border-border">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll whitespace-nowrap scrollbar-hide gap-2"
        >
          {businessTypeBtn.map((item) => (
            <BusinessTypeBtn
              key={item.id}
              title={item.title}
              onPress={() => chooseBusinessType(item.title)}
              active={activeButton === item.title}
            />
          ))}
        </div>
      </section>

      <Body
        activeButton={activeButton}
        integrationPartners={integrationPartners}
        handleIsIntegrationActive={handleIsIntegrationActive}
        setBusinessTypeBtn={setBusinessTypeBtn}
      />

      <section className="flex flex-col mt-5 px-[26px] w-full items-center xl:hidden">
        <div className="flex flex-col items-center gap-2 overflow-y-scroll h-72 scrollbar-hide w-full max-w-screen-md">
          {integrationPartners.map((item) => (
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
      </section>
    </div>
  );
};

export default TurnKeyIntegration;
