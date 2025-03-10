import React from "react";

const SpecialCards = ({
  data,
}: {
  data: {
    description: string;
    image: string;
    name: string;
    designation: string;
  };
}) => {
  return (
    <div className="w-full sm:w-[350px] xl:w-[400px] flex xl:flex-col flex-col-reverse gap-[13px] xl:gap-[48px]">
      <p className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[28px] font-normal">
        {data.description}
      </p>
      <div className="flex items-center w-full gap-[12px]">
        <img
          src={`${data.image}`}
          alt="user-avatar"
          className="w-[50px] h-[50px] object-cover"
        />
        <div>
          <h4 className="text-[18px] leading-[20px] text-black/75 font-semibold m-0 mb-[4px]">
            {data.name}
          </h4>
          <p className="text-[14px] leading-[20px] font-normal text-[#51636F]">
            {data.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCards;
