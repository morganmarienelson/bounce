import { Grommet, Heading } from "grommet/components";
import { Header, Nav } from "grommet";
import styles from "../css/bounceHeading.module.scss"
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {ColorModeSwitcher} from "./colorModeSwitch";

function BounceHomePageHeading() {
  // const { data: session } = useSession();
  return (
    <Grommet>
      <Header className={styles.header}>
        {/*<Heading className={styles.headingTitle}>Bounce</Heading>*/}
        {/*  {!session && (*/}
        {/*      <Nav direction="row">*/}
        {/*      <div className={styles.navCol}>*/}
        {/*    <Link*/}
        {/*      href="/api/auth/signin"*/}
        {/*      onClick={(e) => {*/}
        {/*        signIn("google");*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <a className={styles.a}>Sign In</a>*/}
        {/*    </Link>*/}
        {/*      </div>*/}
        {/*          <div className={styles.navCol}>*/}
        {/*              <ColorModeSwitcher/>*/}
        {/*          </div>*/}
        {/*      </Nav>*/}
        {/*  )}*/}
        {/*  {session && (*/}
        {/*      <Nav direction={'column'}>*/}
        {/*      <div className={styles.userName}>*/}
        {/*         {session.user?.name}*/}
        {/*      </div>*/}
        {/*          <Nav direction={'row'}>*/}
        {/*      <div className={styles.navCol}>*/}

        {/*    <Link*/}
        {/*      href="/api/auth/signout"*/}
        {/*      onClick={(e) => {*/}
        {/*        signOut();*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <a className={styles.a}>Sign Out</a>*/}
        {/*    </Link>*/}
        {/*      </div>*/}
        {/*          <div className={styles.navCol}>*/}
        {/*              <ColorModeSwitcher/>*/}
        {/*          </div>*/}
        {/*          </Nav>*/}
        {/*      </Nav>*/}
        {/*  )}*/}
      </Header>
    </Grommet>
  );
}

export default BounceHomePageHeading;
