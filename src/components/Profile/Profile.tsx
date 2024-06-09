import profileImg from "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

const Profile = () => {
  return (
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
  );
};

export default Profile;
