import React from "react";
import IconConstruction from "@/app/_assets/servicesIcon/iconConstruction";
import IconRenovation from "@/app/_assets/servicesIcon/iconRenovation";
import IconDesign from "@/app/_assets/servicesIcon/iconDesign";
import IconWaterproofing from "@/app/_assets/servicesIcon/iconWaterproofing";
import IconConsultation from "@/app/_assets/servicesIcon/iconConsultation";
import IconElectrical from "@/app/_assets/servicesIcon/iconElectrical";

interface CardServicesProps {
  icon?: string;
  title: string;
  description: string;
}

const icons: { [key: string]: React.FC } = {
  construction: IconConstruction,
  renovation: IconRenovation,
  design: IconDesign,
  waterproofing: IconWaterproofing,
  consultation: IconConsultation,
  electrical: IconElectrical,
};

const CardServices: React.FC<CardServicesProps> = ({
  icon,
  title,
  description,
}) => {
  const IconComponent = icon ? icons[icon] : null;

  return (
    <div className="card bg-gray-200 rounded p-8 shadow-md flex flex-col items-center text-center">
      <div className="card-img pb-3">
        {IconComponent ? (
          <IconComponent />
        ) : (
          <span className="text-red-500">Icon Not Found</span>
        )}
      </div>
      <div className="card-title text-xl font-semibold pb-3">
        <h4>{title}</h4>
      </div>
      <div className="card-desc pb-3">
        <p>{description}</p>
      </div>
      <button className="btn btn-primary">Hubungi Kami</button>
    </div>
  );
};

export default CardServices;

export default CardServices;
