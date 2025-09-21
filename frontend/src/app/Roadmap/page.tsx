import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

function page(){
  return(
    <div className="grid grid-cols-[280px_1fr]">
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default page;