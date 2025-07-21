import clsx from "clsx";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "bg-gradient-to-r cursor-pointer from-[#3a62ff] via-[#7044fb] to-[#9a27ff] text-white font-semibold py-1 px-4 rounded-2xl",
        className
      )}
    >
      {children}
    </button>
  );
}
