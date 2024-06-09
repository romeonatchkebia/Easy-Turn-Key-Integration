import { useEffect, useRef, useState } from "react";
import BusinessTypeBtn from "../BusinessTypeBtn/BusinessTypeBtn";

const BusinessTypeBtnData = [
  { id: 1, title: "Small Business" },
  { id: 2, title: "Medium Business" },
  { id: 3, title: "Enterprise" },
];

const TurnKey = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      <section className="flex flex-col bg-green-400 mb-5">
        <h1 className="font-circular font-bold text-4xl leading-[43.2px] pb-6 text-text-content text-center">
          Easy Turn-Key Integration
        </h1>

        <p className="font-sf text-base leading-[25.6px] text-text-content opacity-80 text-center">
          Increase job setisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
      </section>

      <section
        ref={containerRef}
        className="flex overflow-x-scroll w-screen bg-yellow-400 whitespace-nowrap scrollbar-hide border-b border-gray-500 gap-6"
      >
        {BusinessTypeBtnData.map((item, index) => (
          <BusinessTypeBtn
            key={item.id}
            title={item.title}
            onPress={() => chooseBusinessType(index)}
            active={activeIndex === index}
          />
        ))}
      </section>

      <section></section>
      <section></section>
    </div>
  );
};

export default TurnKey;
