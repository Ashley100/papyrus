import React from "react";
import Link from 'next/link'


export default function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/" shallow>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" shallow>
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/logout" as="/logout">
                            <a>Logout</a>
                        </Link>
                    </li>

                    {/*<li><a href="/">Home</a></li>*/}
                    {/*<li><a href="/login">login</a></li>*/}
                    {/*<li><a href="/logout">logout</a></li>*/}
                </ul>
            </nav>
        </header>
    )
}