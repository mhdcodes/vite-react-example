import { Navbar } from "@design-library/navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => <>
  <main className="flex flex-col items-center min-h-screen">
    <Navbar />
    <div className="flex flex-row flex-wrap justify-center gap-8">
      <Outlet />
    </div>
  </main>
</>
