import { Grommet, Heading } from "grommet/components";
import { Header, Nav } from "grommet";
import styles from "../css/bounceHeading.module.css"
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {ColorModeSwitcher} from "./colorModeSwitch";

function BounceHomePageHeading() {
  const { data: session } = useSession();
  return (
    <Grommet>
      <Header className={styles.header}>
        <Heading className={styles.headingTitle}>Bounce</Heading>
        <Nav direction="row">
            <div className={styles.navCol}>
          {!session && (
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                signIn("github");
              }}
            >
              <a className={styles.a}>Sign In</a>
            </Link>
          )}
          {session && (
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                signOut();
              }}
            >
              <a className={styles.a}>Sign Out</a>
            </Link>
          )}
            </div>
            <div className={styles.navCol}>
                <ColorModeSwitcher/>
            </div>
        </Nav>
      </Header>
    </Grommet>
  );
}

export default BounceHomePageHeading;
