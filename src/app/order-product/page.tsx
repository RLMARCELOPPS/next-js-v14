"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Clicked");
    router.push("/"); // Replace with the desired route
    // router.replace("/"); // Replace with the desired route and push it to the history stack instead of replacing it
    // router.forward(); // Replace with the desired route and forward it to the history stack instead of replacing it
    // router.back(); // Replace with the previous route
    // router.refresh(); // Refresh the current route with the current query parameters
  };
  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
