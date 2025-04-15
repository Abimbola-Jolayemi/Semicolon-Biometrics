const StatsCard = ({ label, value }) => {
    return (
      <div className="bg-[#FFF4EB] rounded-md p-4 shadow-md text-[#25324B] text-lg font-medium">
        {label}: <span className="font-bold">{value}</span>
      </div>
    );
  };
  
  export default StatsCard;
  