import React from "react";
import Link from 'next/link'


export default function Header ({store}) {
    console.log("FC >> Header >> props >> ", store);
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/" shallow>
                            <a>Home</a>
                        </Link>
                    </li>
                    {store.user.logged === false &&
                    <li>
                        <Link href="/login" shallow>
                            <a>Login</a>
                        </Link>
                    </li>
                    }
                    {store.user.logged === false &&
                    <li>
                        <Link href="/signup" shallow>
                            <a>Signup</a>
                        </Link>
                    </li>
                    }
                    {store.user.logged === true &&
                    <li>
                        <Link href="/logout" as="/logout">
                            <a>Logout</a>
                        </Link>
                    </li>
                    }

                    {/*<li><a href="/">Home</a></li>*/}
                    {/*<li><a href="/login">login</a></li>*/}
                    {/*<li><a href="/logout">logout</a></li>*/}
                </ul>
            </nav>
        </header>
    )
}