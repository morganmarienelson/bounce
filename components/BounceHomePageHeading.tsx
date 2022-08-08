import {Grommet, Heading} from "grommet/components";
import {Header, Nav} from 'grommet';
import styles from "./BounceHeading.module.css"
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession} from "next-auth/react";


function BounceHomePageHeading() {
    const { data: session, status: loading } = useSession()
    return (
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
                            <a className={styles.a}>Sign In</a>
                        </Link>
                         )}
                         { session && (
                         <Link href="/api/auth/signout" onClick={e => {
                             signOut()
                         }}>
                             <a className={styles.a}>Sign Out</a>
                         </Link>
                         )}
                     </Nav>
              </Header>
              </Grommet>
        )

}

export default BounceHomePageHeading;