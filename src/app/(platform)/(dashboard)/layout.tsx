import DashboardNavbar from "./_components/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <DashboardNavbar></DashboardNavbar>
      {children}
    </div>
  );
};
export default DashboardLayout;
