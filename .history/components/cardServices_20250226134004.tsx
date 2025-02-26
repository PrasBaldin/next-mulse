import React from "react";

interface CardServicesProps {
  img?: string; // Jika nanti ingin menambahkan gambar
  title: string;
  description: string;
}

const CardServices: React.FC<CardServicesProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="card bg-gray-200 rounded p-8 shadow-md">
      <div className="card-img pb-3">
        {img ? (
          <img src={img} alt={title} className="w-full h-auto" />
        ) : (
          <span>Image</span>
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
