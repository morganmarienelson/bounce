import {Col, Progress, Row, Statistic} from "antd";
import {Table, TableBody, TableCell, TableHeader, TableRow} from "grommet/components";

const NetData = () => {
    return (
        <Table style={{fontSize: 20}}>
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
                    <TableCell>Coconut</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Double Faults</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Missed Returns</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Baseline Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Baseline Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Forehand Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Forehand Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Backhand Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Backhand Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Net Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Net Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Forehand Volley Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Forehand Volley Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Backhand Volley Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Backhand Volley Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Overhead Winners</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Overhead Unforced Errors</strong>
                    </TableCell>
                    <TableCell>Watermelon</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default NetData;
