import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "grommet/components";
import styles from "./css/matchStats.module.css";

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
        <Table>
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
                        <div className={styles.tableCell}>Aces</div>
                    </TableCell>
                    <TableCell>{testMatchData.Aces}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Double Faults</div>
                    </TableCell>
                    <TableCell>{testMatchData.DoubleFaults}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Missed Returns</div>
                    </TableCell>
                    <TableCell>{testMatchData.MissedReturns}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Baseline Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.BaselineWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Baseline Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.BaselineUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.ForehandWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.ForehandUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.BackhandWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.BackhandWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Net Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.NetWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Net Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.NetUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Volley Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.ForehandVolleyWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Volley Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.ForehandVolleyUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Volley Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.BackhandVolleyWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Volley Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.BackhandVolleyUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Overhead Winners</div>
                    </TableCell>
                    <TableCell>{testMatchData.OverheadWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Overhead Unforced Errors</div>
                    </TableCell>
                    <TableCell>{testMatchData.OverheadUnforced}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default MatchDataTable;
