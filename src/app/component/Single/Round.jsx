"use client";

export default function Round({
  val = "",
  selected = false,
  action = true,
  color = "",
  onClick,
}) {
  return (
    <>
      <div
        onClick={onClick}
        className={`flex w-10 h-10  rounded-full border border-transparent tr-3 items-center justify-center text-sm ${
          selected && action && "!border-green-800 bg-white"
        } ${color == "gray" ? "bg-gray-100 hover:bg-white" : "bg-white"} 
        ${action && "hover:cursor-pointer hover:border-green-800"}  
        `}
      >
        {val}
      </div>
    </>
  );
}
