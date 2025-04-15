import images from '../assets/images'
const Sidebar = () => {
  return (
    <div className="w-[240px] h-screen bg-[#FFF3CB] flex flex-col justify-between py-6 px-4 fixed">
      <div>
        <img src="/semicolon-logo.png" alt="Semicolon" className="mb-10" />

        <nav className="space-y-6">
          <div className="flex items-center gap-2 text-[#E60000] font-semibold">
            <img src={images.doorOpenSolid} alt="" /> Welcome
          </div>
          <div className="flex items-center gap-2 text-[#25324B] hover:text-[#E60000]">
            <img src={images.userSolid} alt="" /> Add Native
          </div>
          <div className="flex items-center gap-2 text-[#25324B] hover:text-[#E60000]">
            <img src={images.usersSolid} alt="" /> Log
          </div>
          <div className="flex items-center gap-2 text-[#25324B] hover:text-[#E60000]">
            <img src={images.rectangleListRegular} alt="" /> Analytics
          </div>
        </nav>
      </div>

      <div className="flex justify-between px-2">
        <img src={images.gearSolid} alt="" />
        <img src={images.powerOff} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;