import profileImg from "./assets/profilepic.jpg";

function Info() {
  return (
    <div
      className={`flex flex-row  gap-4  bg-black h-auto text-slate-50 p-4 sm:p-12 rounded-2xl w-full max-w-3xl transition-opacity duration-500 shadow-xl border border-stone-800 
        animate-fade-in `}
    >
      <img
        src={profileImg}
        className="w-24 h-24 object-cover rounded-full "
      ></img>
      <div className="flex flex-col justify-end">
        <span className="font-bold text-2xl">Filip Międlar</span>
        <span className="">Web developer</span>
        <span>filipmiedlar801@gmail.com</span>
      </div>
    </div>
  );
}

export default Info;
