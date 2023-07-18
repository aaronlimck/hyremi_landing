const BenefitsCard = ({ icon, heading, description }) => {
  return (
    <div className="p-4">
      <div className="border-2 border-gray-100 bg-white flex items-center justify-center w-10 h-10 rounded-md mb-4">
        {icon}
      </div>
      <p className="text-xl font-semibold mb-2.5">{heading}</p>
      <p>{description}</p>
    </div>
  );
};

export default BenefitsCard;
