export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav>
      this is the navigation bar
      {children}
    </nav>
  );
}
