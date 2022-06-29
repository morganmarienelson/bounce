import { Heading } from "grommet/components";
import "antd/dist/antd.css";
import MatchOverviewData from "./components/matchOverviewData";
import ServingDataDisplay from "./components/servingDataDisplay";

const MatchStats = () => {
  return (
    <>
      <Heading size="small">Match Overview</Heading>
      <MatchOverviewData />
      <ServingDataDisplay />
    </>
  );
};

export default MatchStats;
