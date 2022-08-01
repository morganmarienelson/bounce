import Link from "next/link";
import {Button, Grommet, Heading} from "grommet/components";
import {Header,  Nav } from 'grommet';
import styles from "./navBar.module.css"
import React, {useState} from "react";
import {UserSettings} from "grommet-icons";
import SettingsModal from "./settingsModal";


function BounceHeading() {
    const [showSettingsModal, setShowSettingsModal ] = useState(false);

    const onUserSettings = () => {
        setShowSettingsModal(true);
    }

    return (
        <>
             <Grommet>
                 <Header className={styles.header}>
                     <Heading className={styles.headingTitle}>
                         Bounce
                     </Heading>
                     <Nav direction="column">
                         <Button
                             secondary
                             style={{marginLeft: 63}}
                             icon={<UserSettings color={'white'}/>}
                             hoverIndicator
                             onClick={onUserSettings}
                         />
                     </Nav>
              </Header>
              </Grommet>

            <SettingsModal settingsModalVisible={showSettingsModal} setSettingsModalVisible={setShowSettingsModal}/>

            </>
        )

}

export default BounceHeading;