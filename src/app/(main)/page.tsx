import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import PostsTable from "@/components/Posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* <div className="flex flex-col  md:flex-row justify-between gap-5 mb-5"> */}
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <DashboardCard
          title="Blog"
          icon={<Newspaper className=" text-slate-500 " size={64} />}
          count={200}
        />
        <DashboardCard
          title="Categories"
          icon={<Folder className=" text-slate-500" size={64} />}
          count={12}
        />
        <DashboardCard
          title="Users"
          icon={<User className=" text-slate-500" size={64} />}
          count={120}
        />
        <DashboardCard
          title="Comments"
          icon={<MessageCircle className=" text-slate-500" size={64} />}
          count={400}
        />
      </div>

      <AnalyticsChart />
      <PostsTable className="mt-6" />
    </>
  );
}


