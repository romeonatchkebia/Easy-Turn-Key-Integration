import BusinessTypeBtn from "../BusinessTypeBtn/BusinessTypeBtn";

const BusinessTypeBtnData = [
  { id: 1, title: "Small Business" },
  { id: 2, title: "Medium Business" },
  { id: 3, title: "Enterprise" },
  { id: 3, title: "Enterprise" },
  { id: 3, title: "Enterprise" },
];

const TurnKey = () => {
  return (
    <div className="h-screen flex flex-col items-center py-12 bg-red-500">
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

      <section className="flex overflow-x-scroll bg-yellow-400 whitespace-nowrap w-screen">
        {BusinessTypeBtnData.map((item) => (
          <BusinessTypeBtn key={item.id} title={item.title} />
        ))}
      </section>

      <section></section>
      <section></section>
    </div>
  );
};

export default TurnKey;
