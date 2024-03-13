import rightarrow from "@/components/images/rightarrow.png";

export default function activeRegion() {
  return (
    <div className="bg-[#fff] rounded-xl">
      <div className="flex items-center justify-between p-6">
        <h1>Идэвхтэй бүс нутаг</h1>
        <img className="w-[12px] h-[12px]" src={rightarrow.src} alt="" />
      </div>
      <div></div>
    </div>
  );
}
