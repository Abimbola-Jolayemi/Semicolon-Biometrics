const WelcomeCard = () => {
    return (
      <div className="max-w-[600px]">
        <p className="text-end text-[#25324B] text-sm italic mb-3">April 8, 2025.</p>
        <h1 className="text-[#25324B] font-bold text-2xl mb-2">
          Welcome back, <span className="italic">Timothy</span> 👋
        </h1>
  
        <h2 className="font-semibold text-[#25324B] text-lg mb-3">What you can do today:</h2>
        <div className="bg-[#FFF4EB] rounded-md p-4 shadow-sm text-[#25324B] leading-7">
          <ul className="list-disc pl-4">
            <li><strong>Add new cohorts</strong> to the system.</li>
            <li><strong>Add new Natives</strong> and assign them to their respective cohorts.</li>
            <li><strong>Monitor Cohort attendance</strong> in real time.</li>
            <li><strong>Track attendance history</strong> for punctuality and absences.</li>
            <li><strong>Ensure data security</strong> through fingerprint-based authentication.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default WelcomeCard;
  