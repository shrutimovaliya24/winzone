import React from "react";
import CommonTitle from "@/components/Common/CommonTitle";
import ClientOnlyLocationMap from "./Components/ClientOnlyLocationMap";

const VisitOurShowroom = () => {
  return (
    <section className="section-container global-grid-responsive">
      <CommonTitle
        tag="VISIT OUR SHOWROOM"
        extraTagCss="bg-theme-color/6"
        title="OUR LOCATION"
        extraTitleCss="xl:w-max-w-[548px] lg:max-w-[500px]"
        description="Our office is conveniently located and easy to reach. Use the map below to get accurate directions, whether you're planning a quick visit or a scheduled meeting. We're always ready to welcome you with a smile."
        extraDescriptionCss=" xl:max-w-[650px] lg:max-w-[520px]"
      />

      <ClientOnlyLocationMap
        latitude={22.280926}
        longitude={70.774524}
        businessName="WinZone"
        address="Survey No.281/1, Plot No.21/22, Shapar, Gujarat 360026"
      />
    </section>
  );
};

export default VisitOurShowroom;
