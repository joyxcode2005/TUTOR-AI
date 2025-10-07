import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen overflow-hidden">
      {/* Sidebar  */}
      <div className="h-screen sticky top-0 overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default layout;
