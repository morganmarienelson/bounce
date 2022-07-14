import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "grommet/components";
import styles from "./css/matchStats.module.css";

interface MatchDataTableProps {
    state: any;
}

const MatchDataTable: React.FC<MatchDataTableProps> = ({state}) => {
    const aces =
        +JSON.stringify(state.context.acesOnFirstServe) +
        +JSON.stringify(state.context.acesOnSecondServe);

    const doubleFaults = +JSON.stringify(state.context.doubleFaults);

    const missedReturns = +JSON.stringify(state.context.missedReturns);

    const baselineWinners =
        +JSON.stringify(state.context.pointsWonByForehandWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandWinner);

    const baselineUnforced =
        +JSON.stringify(state.context.pointsLostByForehandUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandUnforcedError);

    const netWinners =
        +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner);

    const netUnforced =
        +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByOverheadUnforcedError);

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
                    <TableCell>{aces}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Double Faults</div>
                    </TableCell>
                    <TableCell>{doubleFaults}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Missed Returns</div>
                    </TableCell>
                    <TableCell>{missedReturns}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Baseline Winners</div>
                    </TableCell>
                    <TableCell>{baselineWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Baseline Unforced Errors</div>
                    </TableCell>
                    <TableCell>{baselineUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Winners</div>
                    </TableCell>
                    <TableCell>
                        {+JSON.stringify(state.context.pointsWonByForehandWinner)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Unforced Errors</div>
                    </TableCell>
                    <TableCell>
                        {+JSON.stringify(state.context.pointsLostByForehandUnforcedError)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Winners</div>
                    </TableCell>
                    <TableCell>
                        {+JSON.stringify(state.context.pointsWonByBackhandWinner)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Unforced Errors</div>
                    </TableCell>
                    <TableCell>
                        {+JSON.stringify(state.context.pointsLostByBackhandUnforcedError)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Net Winners</div>
                    </TableCell>
                    <TableCell>{netWinners}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Net Unforced Errors</div>
                    </TableCell>
                    <TableCell>{netUnforced}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Forehand Volley Winners</div>
                    </TableCell>
                    <TableCell>
                        {+JSON.stringify(state.context.pointsWonByForehandVolleyWinner)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>
                            Forehand Volley Unforced Errors
                        </div>
                    </TableCell>
                    <TableCell>
                        {
                            +JSON.stringify(
                                state.context.pointsLostByForehandVolleyUnforcedError
                            )
                        }
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Backhand Volley Winners</div>
                    </TableCell>
                    <TableCell>
                        {" "}
                        {+JSON.stringify(state.context.pointsWonByBackhandVolleyWinner)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>
                            Backhand Volley Unforced Errors
                        </div>
                    </TableCell>
                    <TableCell>
                        {" "}
                        {
                            +JSON.stringify(
                                state.context.pointsLostByBackhandVolleyUnforcedError
                            )
                        }
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Overhead Winners</div>
                    </TableCell>
                    <TableCell>
                        {" "}
                        {+JSON.stringify(state.context.pointsWonByOverheadWinner)}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <div className={styles.tableCell}>Overhead Unforced Errors</div>
                    </TableCell>
                    <TableCell>
                        {+JSON.stringify(state.context.pointsLostByOverheadUnforcedError)}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default MatchDataTable;
