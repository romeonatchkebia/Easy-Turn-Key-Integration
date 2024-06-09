import { useEffect, useRef, useState } from "react";
import BusinessTypeBtn from "../BusinessTypeBtn/BusinessTypeBtn";
import profileImg from "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import IntegrationCard from "../IntegrationCard/IntegrationCard";
import { BusinessTypeBtnData } from "../../types/BusinessTypeBtn";
import sapling from "../../assets/logos/sappling.webp";
import workday from "../../assets/logos/workday.jpeg";
import xero from "../../assets/logos/xero.png";
import rippling from "../../assets/logos/rippling.png";
import Expensify from "../../assets/logos/expensify.svg";
import Zenefits from "../../assets/logos/zenefits.webp";

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
      <section className="flex flex-col mb-5 mx-[26px] max-w-screen-md">
        <h1 className="font-circular font-bold text-4xl leading-[43.2px] pb-6 text-text-content text-center">
          Easy Turn-Key Integration
        </h1>

        <p className="font-sf text-base leading-[25.6px] text-text-content opacity-80 text-center">
          Increase job setisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
      </section>

      <section className="flex justify-center w-screen border-b border-border">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll whitespace-nowrap scrollbar-hide"
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

      <section className="flex w-full h-full justify-center items-center px-[26px] pt-16">
        <div className="relative flex w-full h-full justify-center items-center min-w-[323px] min-h-60 max-w-[380px] max-h-[268px] border-2 bg-background border-active rounded-[24px]">
          <img
            src={profileImg}
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] w-20 h-20 object-cover"
          />

          <div className="flex flex-col h-[151px] w-[300px] items-center justify-between mb-[-30px]">
            <div className="flex  flex-col items-center gap-1">
              <h1 className="font-bold font-sf leading-[25.2px] text-lg">
                Lauren Robson
              </h1>

              <h2 className="font-sf text-subTitle leading-[22.4px] text-sm font-normal">
                HR Director
              </h2>
            </div>

            <p className="font-sf mt-2 text-center leading-[25.6px] text-base text-text-content font-normal">
              "I want to lower PTO liability and keep my employees happy. I want
              to lower PTO liability."
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-5 px-[26px] w-full items-center">
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
