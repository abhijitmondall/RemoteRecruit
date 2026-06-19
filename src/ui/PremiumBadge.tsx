import React from "react";

function PremiumBadge({
  children,
  icon,
}: {
  children?: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="absolute w-[140px] -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-[22px] bg-[#C2EEFF] px-4 py-1.5 shadow-[#4391C135]">
      <img
        src={icon}
        alt="Premium badge icon"
        className="w-[36px] h-[36px] ml-[-8px]"
      />
      <span className="text-[16px] font-[600] text-[#11142D]">{children}</span>
    </div>
  );
}

export default PremiumBadge;
