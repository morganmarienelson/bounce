import Image from 'next/image'
import catPic from '../pictures/catPic.jpg'
import Link from "next/link";
import styles from "../css/404Page.module.css"
import {Button} from "grommet/components";


function PageNotFound(){


    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.number}>404</div>
                <div className={styles.oops}>Oops, something went wrong. You were not
                supposed to see this adorable fluffy cat!</div>
                <div className={styles.buttonText}>Click this button to go back to the home screen!</div>
               <div className={styles.button}>
                   <Link href='/'>
                       <Button
                           type="primary"
                           style={{
                               background: "#480096",
                               border: "#480096",
                           }}
                       >

                           <div className={styles.btnLabel}> Back To Home</div>
                       </Button>
                   </Link>
               </div>
            </div>
            <div className={styles.pic}>
                <Image
                    src={catPic}
                    alt="Picture of fluffy cat"
                />
            </div>
        </div>
    )
    }


export default PageNotFound;