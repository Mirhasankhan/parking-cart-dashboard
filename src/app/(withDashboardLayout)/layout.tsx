"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { LayoutDashboard, Webcam, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Providers from "@/lib/providers/Providers";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen overflow-auto">
      <div className="grid min-h-screen grid-cols-5  border-r">
        <div
          className={`${
            isOpen ? "col-span-5" : "hidden md:block"
          } md:col-span-1`}
        >
          <div className="flex justify-between items-center pt-4">
            <Link href="/" className="flex gap-1 items-center mx-6">
              <div className="bg-blue-600 p-1 rounded-full text-white">
                <Webcam></Webcam>
              </div>
              <h1 className="text-xl font-semibold">Site name</h1>
            </Link>
            <button className="md:hidden pr-1">
              <X onClick={() => setIsOpen(!isOpen)}></X>
            </button>
          </div>
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div
          className={`${
            !isOpen ? "col-span-5" : "hidden md:block"
          } md:col-span-4 bg-gray-100 overflow-auto h-full`}
        >
          {/* header */}
          <div className="flex gap-3 h-16 border-b bg-white border-l items-center px-3">
            <button className="md:hidden">
              <LayoutDashboard
                onClick={() => setIsOpen(!isOpen)}
              ></LayoutDashboard>
            </button>
            <DashboardHeader></DashboardHeader>
          </div>
          {/* <div className="p-4">{children}</div> */}
          <Providers>
            <div className="p-4">{children}</div>
          </Providers>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

// "use client";

// import Sidebar from "@/components/dashboard/Sidebar";
// import DashboardHeader from "@/components/dashboard/DashboardHeader";
// import { PanelRight, Webcam } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="h-screen overflow-hidden">
//       <div className="grid min-h-screen grid-cols-5 border-r">
//         <div
//           className={`${isOpen ? "col-span-3" : "col-span-1"} md:col-span-1`}
//         >
//           <Link href="/" className="flex gap-1 items-center mx-6 pt-4">
//             <div className="bg-blue-600 p-1 rounded-full text-white">
//               <Webcam></Webcam>
//             </div>
//             <h1 className="hidden md:block text-xl font-semibold">Site name</h1>
//             {isOpen && (
//               <h1 className="md:hidden text-xl font-semibold">Site name</h1>
//             )}
//           </Link>

//           <Sidebar isOpen={isOpen} />
//         </div>
//         <div
//           className={`${
//             isOpen ? "col-span-2" : "col-span-4"
//           } md:col-span-4 bg-gray-100 overflow-auto h-full`}
//         >
//           {/* header */}
//           <div className="flex gap-3 h-16 border-b items-center px-3">
//             <button className="md:hidden">
//               <PanelRight onClick={() => setIsOpen(!isOpen)}></PanelRight>
//             </button>
//             <DashboardHeader></DashboardHeader>
//           </div>
//           <div className="p-4">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
