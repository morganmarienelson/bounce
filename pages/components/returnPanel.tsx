import {Button, Col, message, Modal} from "antd";
import {Undo} from "grommet-icons";


interface ReturnPanelProps {
    onServeAndReturn: () => void;
    pointFinished: () => void;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({onServeAndReturn, pointFinished}) => {
    const pointUndone = () => {
        message.success('The last point has been removed from record', 2);
    };

    return (
        <>
            <Col span={9}></Col>
            <Col style={{marginTop: 30}}>
                <h1>Return</h1>
            </Col>
            <Col span={11}></Col>
            <Col span={10}>
                <Button
                    type="primary"
                    style={{width: 500, height: 200}}
                    onClick={onServeAndReturn}
                >
                    <h2 style={{color: "white"}}>In</h2>
                </Button>
            </Col>
            <Col span={11}>
                <Button
                    type="primary"
                    danger={true}
                    style={{width: 500, height: 200}}
                    onClick={pointFinished}
                >
                    <h2 style={{color: "white"}}>Miss</h2>
                </Button>
            </Col>
            <Col span={2}>
                <Button
                    type="default"
                    style={{width: 100, height: 100, marginTop: 60}}
                    icon={<Undo/>}
                    onClick={pointUndone}
                />
            </Col>
        </>
    );
};

export default ReturnPanel;
