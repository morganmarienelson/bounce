import Link from "next/link";


function NavBar() {
    return (
        <>
        <header>

        </header>
        <div>
            Nav Bar
        </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='/matchLog'>Match Logs</Link>
                    </li>
                </ul>
            </nav>
            </>
        )

}

export default NavBar;