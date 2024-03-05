import NavIcon from "@/components/images/NavIcon.png";
import Bell from "@/components/images/bell.png";
import User from "@/components/images/user.png";
function Navbar() {
  return (
    <div className="bg-black flex justify-between p-3">
      <div>
        <img src={NavIcon.src} alt="" />
      </div>
      <div className="flex gap-5 items-center">
        <img className="w-4 h-4" src={Bell.src} alt="" />
        <button className="flex items-center gap-5">
          <img className="w-4 h-4" src={User.src} alt="" />
          <p className="text-[white]">Username</p>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
