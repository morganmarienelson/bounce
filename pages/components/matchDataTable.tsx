import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "grommet/components";

const MatchDataTable = () => {
  const testMatchData = {
    Aces: 4,
    DoubleFaults: 10,
    MissedReturns: 2,
    BaselineWinners: 3,
    BaselineUnforced: 30,
    ForehandWinners: 2,
    ForehandUnforced: 3,
    BackhandWinners: 9,
    BackhandUnforced: 3,
    NetWinners: 6,
    NetUnforced: 4,
    ForehandVolleyWinners: 3,
    ForehandVolleyUnforced: 5,
    BackhandVolleyWinners: 4,
    BackhandVolleyUnforced: 4,
    OverheadWinners: 4,
    OverheadUnforced: 5,
  };

  return (
    <Table style={{ fontSize: 22, borderLeft: "solid", marginLeft: 12 }}>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Shot Type
          </TableCell>
          <TableCell scope="col" border="bottom">
            Value
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <strong>Aces</strong>
          </TableCell>
          <TableCell>{testMatchData.Aces}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Double Faults</strong>
          </TableCell>
          <TableCell>{testMatchData.DoubleFaults}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Missed Returns</strong>
          </TableCell>
          <TableCell>{testMatchData.MissedReturns}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Baseline Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.BaselineWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Baseline Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.BaselineUnforced}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Forehand Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.ForehandWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Forehand Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.ForehandUnforced}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Backhand Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.BackhandWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Backhand Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.BackhandWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Net Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.NetWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Net Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.NetUnforced}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Forehand Volley Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.ForehandVolleyWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Forehand Volley Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.ForehandVolleyUnforced}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Backhand Volley Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.BackhandVolleyWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Backhand Volley Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.BackhandVolleyUnforced}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Overhead Winners</strong>
          </TableCell>
          <TableCell>{testMatchData.OverheadWinners}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Overhead Unforced Errors</strong>
          </TableCell>
          <TableCell>{testMatchData.OverheadUnforced}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MatchDataTable;
