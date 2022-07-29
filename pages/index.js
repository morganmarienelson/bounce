import { Fragment} from "react";
import Link from 'next/link';

function HomePage(){
    return(
        <Fragment>
            <h1>Dashboard</h1>
            <ul></ul>
            <li>
                <Link href="/dashboard">
                    Go to dashboard
                </Link>
            </li>
        </Fragment>


    )
}

export default HomePage;