function SectionContainer({
  id,
  style,
  children,
}) {
  return (
    <section
      id={id}
      className={`bg-[#1b1324] backdrop-blur-sm bg-opacity-30 text-white p-6 h-auto shadow-[0px_2px_20px_rgba(0,0,0,0.5)] rounded-md ${style ?? ""}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
