export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-4xl uppercase font-bold flex items-center justify-center">
        {children}
      </h2>
    </div>
  );
}
