import Hero from "../components/Hero";
import StatsCard from "../components/StatsCard";
import ChartSection from "../components/ChartSection";
import ActivityTable from "../components/ActivityTable";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <StatsCard />
      <ChartSection />
      <ActivityTable />
    </>
  );
};

export default Dashboard;
