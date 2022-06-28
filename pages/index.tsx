import React, { useEffect, useState } from "react";
import LosingModal from "./components/losingModal";
import PointOutcomeComponent from "./components/pointOutcome";
import Score from "./components/score";
import WinningModal from "./components/winningModal";
import MatchInfo from "./matchInfo";
import {Button} from "antd";
import { Undo} from "grommet-icons";

const MatchOverview = () => {
    const [isWinningModalVisible, setIsWinningModalVisible] = useState(false);
    const [isLosingModalVisible, setIsLosingModalVisible] = useState(false);
    const [pointsWon, setPointsWon] = useState(0);
    const [pointsLost, setPointsLost] = useState(0);
    const [gamesLost, setGamesLost] = useState(6);
    const [gamesWon, setGamesWon] = useState(6);
    const [showSetTieBreak, setShowSetTieBreak] = useState(false);
    const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];
    const [lastPoint, setLastPoint] = useState(0);
    const [undoButtonDisabled, setUndoButtonDisabled] = useState(true);
    const [secondSet, setSecondSet] = useState(true);
    const [previousPlayerSetScore, setPreviousPlayerSetScore ] = useState(0);
    const [previousOpponentSetScore, setPreviousOpponentSetScore ] = useState(0);
    const [showMatchTieBreak, setShowMatchTieBreak] = useState(false);

    const handleOkWinningModal = () => {
        setIsWinningModalVisible(false);
        setPointsWon(pointsWon + 1);
        setLastPoint(0);
        setUndoButtonDisabled(false);
    };

    const handleCancelModal = () => {
        setIsWinningModalVisible(false);
        setIsLosingModalVisible(false);
    };

    const handleOkLosingModal = () => {
        setIsLosingModalVisible(false);
        setPointsLost(pointsLost + 1);
        setLastPoint(1)
        setUndoButtonDisabled(false);
    };

    const undoButton = () => {
        if (lastPoint == 0 && pointsWon != 0){
            setPointsWon(pointsWon -1);
        } else if (pointsLost != 0) {
            setPointsLost(pointsLost-1);
        }
    }

    const updateMatchScore = (pointsWon: number, pointsLost: number) => {
        if ((pointsWon == 4 && pointsLost != 6) || pointsWon == 6) {
            setGamesWon(gamesWon + 1)
        } else {
            setGamesLost(gamesLost + 1);
        }
    };

    const updateGameScore = () => {
        if (!showSetTieBreak && !showMatchTieBreak) {
            checkSetScore();
            if (
                (pointsWon == 4 && pointsLost < 3) ||
                pointsLost == 6 ||
                pointsWon == 6 ||
                (pointsLost == 4 && pointsWon < 3)
            ) {
                updateMatchScore(pointsWon, pointsLost);
                setPointsWon(0);
                setPointsLost(0);
            } else if (
                (pointsLost == 3 && pointsWon == 3) ||
                (pointsLost == 5 && pointsWon == 5)
            ) {
                setPointsWon(4);
                setPointsLost(4);
            }
            return [scores[pointsWon], scores[pointsLost]];
        }
        else {
            if (!showMatchTieBreak){
                if (pointsWon >=7 && (pointsWon-pointsLost) >= 2){
                    if (previousPlayerSetScore != 0) {
                        checkMatchTieBreak();
                    } else {
                        setPointsLost(0);
                        setPointsWon(0);
                        setShowSetTieBreak(false);
                        setPreviousPlayerSetScore(gamesWon + 1);
                        setPreviousOpponentSetScore(gamesLost);
                        setSecondSet(false);
                        setGamesLost(0);
                        setGamesWon(0);
                    }
                }
                else if (pointsLost >=7 && (pointsLost-pointsWon) >= 2){
                    if (previousPlayerSetScore != 0) {
                        checkMatchTieBreak();
                    } else {
                        setPointsLost(0);
                        setPointsWon(0);
                        setShowSetTieBreak(false);
                        setPreviousPlayerSetScore(gamesWon);
                        setPreviousOpponentSetScore(gamesLost + 1);
                        setSecondSet(false);
                        setGamesLost(0);
                        setGamesWon(0);
                    }
                }
            } else {
                if (pointsWon >=10 && (pointsWon-pointsLost) >= 2){
                    setPointsLost(0);
                    setPointsWon(0);
                    setShowMatchTieBreak(false);
                }
                else if (pointsLost >=10 && (pointsLost-pointsWon) >= 2){
                    setPointsLost(0);
                    setPointsWon(0);
                    setShowMatchTieBreak(false);
                }

            }
            return [pointsWon,pointsLost];
        }

    };

    const checkSetScore = () => {
        if ((gamesWon == 6 && gamesLost <=4) || (gamesLost == 6 && gamesWon <=4) || (gamesWon == 5 && gamesLost == 7) || (gamesWon == 7 && gamesLost == 5)  ){
            if (previousPlayerSetScore != 0) {
                checkMatchTieBreak();
            }  else {
                setPreviousPlayerSetScore(gamesWon);
                setPreviousOpponentSetScore(gamesLost);
                setGamesLost(0);
                setGamesWon(0);
            }

        } else if (gamesWon == 6 && gamesLost == 6){
            setShowSetTieBreak(true)
            setPointsWon(0);
            setPointsLost(0);
        }
    }
//TODO: fix double tiebreak situation
    const checkMatchTieBreak = () => {
            if (((previousPlayerSetScore > previousOpponentSetScore) && (gamesWon < gamesLost)) || ((previousPlayerSetScore < previousOpponentSetScore) && (gamesWon > gamesLost))) {
                setShowMatchTieBreak(true);
                setPointsWon(0);
                setPointsLost(0);
            }
    }


    return (
        <>
            <MatchInfo />

            <Score
                gamesLost={gamesLost}
                gamesWon={gamesWon}
                pointsLost={pointsLost}
                pointsWon={pointsWon}
                updateGameScore={updateGameScore}
                secondSet={secondSet}
                previousPlayerSetScore={previousPlayerSetScore}
                previousOpponentSetScore={previousOpponentSetScore}
            />

            <PointOutcomeComponent
                setIsWinningModalVisible={setIsWinningModalVisible}
                setIsLosingModalVisible={setIsLosingModalVisible}
                undoButton={undoButton}
                undoButtonDisabled={undoButtonDisabled}
            />


            <WinningModal
                handleOkWinningModal={handleOkWinningModal}
                isWinningModalVisible={isWinningModalVisible}
                handleCancelModal={handleCancelModal}
            />

            <LosingModal
                handleOkLosingModal={handleOkLosingModal}
                isLosingModalVisible={isLosingModalVisible}
                handleCancelModal={handleCancelModal}
            />

        </>
    );
};

export default MatchOverview;
