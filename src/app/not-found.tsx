import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>
        Page not Exist! <Link href="/">Return to Home Page</Link>
      </h1>
    </div>
  );
}
