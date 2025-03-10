import React from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, subtitle }) => (
    <div className="p-6 bg-white  rounded-lg">
        <h3 className="text-2xl font-semibold text-[#00638D]">{price}</h3>
        <p className="text-sm text-gray-500 mb-2 hidden md:flex">{subtitle}</p>
        <h4 className="font-bold text-lg text-gray-700 mb-4">{title}</h4>
        <p className="text-gray-600 md:flex hidden">{description}</p>
    </div>
);

export default ServiceCard;
