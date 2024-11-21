export default function BackgroundLayout({ children }) {
  return (
    <>
      <div className="absolute w-full h-screen overflow-hidden bg-[#10061E] -z-10">
        {/* Red glowing areas */}
        <div className="absolute top-24 -left-52 size-[262px] bg-[color:--primary] rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-60 right-60 size-[280px] bg-[color:--primary] rounded-full filter blur-[80px]"></div>
        <div className="absolute -bottom-64 right-1/2 w-[351px] h-[271px] bg-[color:--primary] rounded-full filter blur-[70px]"></div>

        <div className="absolute top-48 left-80 size-[8px] bg-[color:--primary-variant] opacity-[62%] rounded-full animate-pulse"></div>
        <div className="absolute bottom-52 left-1/3 size-[8px] bg-[color:--primary-variant] opacity-[62%] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/2 left-1/2 size-[8px] bg-[color:--primary-variant] opacity-[62%] rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 size-[14px] bg-[color:--primary-variant] opacity-[62%] rounded-full filter blur-sm animate-pulse"></div>
      </div>
      {children}
    </>
  );
}
