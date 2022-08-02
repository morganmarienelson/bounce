import {Grommet, Heading} from "grommet/components";
import {Header, Nav} from 'grommet';
import styles from "./BounceHeading.module.css"
import React, {useState} from "react";
import SettingsModal from "./settingsModal";
import Link from "next/link";
import { signIn, signOut, useSession} from "next-auth/react";
import {redirect} from "next/dist/server/api-utils";


function BounceHeading() {
    const [showSettingsModal, setShowSettingsModal ] = useState(false);
    const { data: session, loading } = useSession()
    return (
        <>
             <Grommet>
                 <Header className={styles.header}>
                     <Heading className={styles.headingTitle}>
                         Bounce
                     </Heading>
                     <Nav direction="row">
                         {!loading && !session && (
                        <Link href="/api/auth/signin" onClick={e => {
                            signIn('github')
                        }}>
                            <a>Sign In</a>
                        </Link>
                         )}
                         { session && (
                         <Link href="/api/auth/signout" onClick={e => {
                             signOut()
                         }}>
                             <a>Sign Out</a>
                         </Link>
                         )}
                     </Nav>
              </Header>
              </Grommet>

            <SettingsModal settingsModalVisible={showSettingsModal} setSettingsModalVisible={setShowSettingsModal}/>

            </>
        )

}

export default BounceHeading;