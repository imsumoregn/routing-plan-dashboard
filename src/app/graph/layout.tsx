export default function GraphLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-screen">{children}</main>;
}
