export default function Container({
  children,
  isPaddingY = true,
}: {
  children: React.ReactNode;
  isPaddingY?: boolean;
}) {
  return (
    <div className={`container mx-auto md:px-20 ${isPaddingY && "py-10"}`}>
      {children}
    </div>
  );
}
