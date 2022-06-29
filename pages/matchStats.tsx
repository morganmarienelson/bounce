import { Heading } from "grommet/components";
import "antd/dist/antd.css";
import MatchOverviewData from "./components/matchOverviewData";

const MatchStats = () => {
  return (
    <>
      <Heading size="small">Match Overview</Heading>
      <MatchOverviewData />
    </>
  );
};

export default MatchStats;
