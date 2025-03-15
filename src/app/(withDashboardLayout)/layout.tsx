"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { LayoutDashboard, Search, X } from "lucide-react";
import Link from "next/link";
import Providers from "@/lib/providers/Providers";
import SignOut from "@/components/dashboard/SignOut";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Providers>
      <div className="grid grid-cols-5 h-screen bg-[#F9F9F9] overflow-hidden">
        <div
          className={`${
            isOpen ? "col-span-5" : "hidden md:block"
          } md:col-span-1 h-full  border-r`}
        >
          <div className="flex justify-between items-center pt-4 border-b pb-6 mb-6 mx-8">
            <Link
              href="/"
              className="flex border-[6px] border-[#F13300] rounded-full gap-1 items-center"
            >
              <div className="bg-white p-1 rounded-full border-[6px] border-[#F45E36]">
                <Search />
              </div>
            </Link>
            <button className="md:hidden pr-1">
              <X onClick={() => setIsOpen(!isOpen)} />
            </button>
          </div>
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
          <SignOut></SignOut>
        </div>
        <div
          className={`${
            !isOpen ? "col-span-5" : "hidden md:block"
          } md:col-span-4 bg-white h-full flex overflow-auto flex-col`}
        >
          <div className="flex gap-3 py-2  bg-white  items-center px-3">
            <button className="md:hidden">
              <LayoutDashboard onClick={() => setIsOpen(!isOpen)} />
            </button>
            <DashboardHeader />
          </div>
          <div className="p-6 flex-1">{children}</div>
        </div>
      </div>
    </Providers>
  );
};

export default DashboardLayout;

// // "use client";

// // import Sidebar from "@/components/dashboard/Sidebar";
// // import DashboardHeader from "@/components/dashboard/DashboardHeader";
// // import { LayoutDashboard, Webcam, X } from "lucide-react";
// // import Link from "next/link";
// // import { useState } from "react";
// // import Providers from "@/lib/providers/Providers";

// // const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <Providers>
// //       <div className="h-screen">
// //         <div className="grid min-h-screen grid-cols-5  border-r">
// //           <div
// //             className={`${
// //               isOpen ? "col-span-5" : "hidden md:block"
// //             } md:col-span-1`}
// //           >
// //             <div className="flex justify-between items-center pt-4">
// //               <Link href="/" className="flex gap-1 items-center mx-6">
// //                 <div className="bg-blue-600 p-1 rounded-full text-white">
// //                   <Webcam></Webcam>
// //                 </div>
// //                 <h1 className="text-xl font-semibold">Site name</h1>
// //               </Link>
// //               <button className="md:hidden pr-1">
// //                 <X onClick={() => setIsOpen(!isOpen)}></X>
// //               </button>
// //             </div>
// //             <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
// //           </div>
// //           <div
// //             className={`${
// //               !isOpen ? "col-span-5" : "hidden md:block"
// //             } md:col-span-4 bg-gray-100 overflow-auto h-full`}
// //           >
// //             {/* header */}
// //             <div className="flex gap-3 h-16 border-b bg-white border-l items-center px-3">
// //               <button className="md:hidden">
// //                 <LayoutDashboard
// //                   onClick={() => setIsOpen(!isOpen)}
// //                 ></LayoutDashboard>
// //               </button>
// //               <DashboardHeader></DashboardHeader>
// //             </div>
// //             <div className="p-4">{children}</div>
// //           </div>
// //         </div>
// //       </div>
// //     </Providers>
// //   );
// // };

// // export default DashboardLayout;
