import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden md:block md:w-[320px] md:min-h-max border-2">
          <Sidebar />
        </div>
        <div className="flex-1 p-5 w-full overflow-x-hidden">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
