import { useEffect, useRef, useState } from "react";
import BusinessTypeBtn from "../BusinessTypeBtn/BusinessTypeBtn";
import profileImg from "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

const BusinessTypeBtnData = [
  { id: 1, title: "Small Business" },
  { id: 2, title: "Medium Business" },
  { id: 3, title: "Enterprise" },
];

const TurnKey = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const chooseBusinessType = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (containerRef.current && activeIndex !== null) {
      const activeElement = containerRef.current.children[
        activeIndex
      ] as HTMLButtonElement;

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="h-screen w-screen flex flex-col items-center py-12">
      <section className="flex flex-col mb-5 mx-[26px]">
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
          {BusinessTypeBtnData.map((item, index) => (
            <BusinessTypeBtn
              key={item.id}
              title={item.title}
              onPress={() => chooseBusinessType(index)}
              active={activeIndex === index}
            />
          ))}
        </div>
      </section>

      <section className="relative min-w-[323px] min-h-60 max-w-[380px] max-h-[268px] border-2 bg-background border-active rounded-[24px] mt-16">
        <img
          src={profileImg}
          className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] w-20 h-20 object-cover"
        />

        <div className="flex flex-col items-center justify-between absolute bottom-0 left-0 right-0 rounded-b-[24px] gap-5 py-4">
          <div className="flex  flex-col items-center gap-1">
            <h1 className="font-bold font-sf leading-[25.2px] text-lg">
              Lauren Robson
            </h1>

            <h2 className="font-sf text-subTitle leading-[22.4px] text-sm font-normal">
              HR Director
            </h2>
          </div>

          <p className="font-sf mt-2 text-center leading-[25.6px] text-base text-text-content font-normal px-2">
            "I want to lower PTO liability and keep my employees happy. I want
            to lower PTO liability."
          </p>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default TurnKey;
