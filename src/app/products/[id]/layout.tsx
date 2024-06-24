"use client";

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product detail");
  }
  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
}
