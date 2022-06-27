import {Heading, Grid, Box} from "grommet/components";
import {Progress} from "antd";
import 'antd/dist/antd.css';

const MatchStats = () => {

    return (
        <>
            <Heading size="small">Match Overview</Heading>

            <Progress type="circle" percent={70} showInfo={true} strokeColor="green"/>
            <Progress type="circle" percent={60} showInfo={true} strokeColor="red"/>
            <Grid
                rows={['xsmall', 'xlarge']}
                columns={['xsmall', 'small']}
                gap="small"
                areas={[
                    { name: 'header', start: [0, 0], end: [1,0] },
                    { name: 'nav', start: [0, 1], end: [0, 1] },
                    { name: 'main', start: [1, 1], end: [1, 1] },
                ]}
            >
                <Box gridArea="header" background="brand" />
                <Box gridArea="nav" background="light-5" />
                <Box gridArea="main" background="light-2" />
            </Grid>
            </>
    );
};

export default MatchStats;
