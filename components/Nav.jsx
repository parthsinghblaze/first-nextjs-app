import React from 'react'
import Link from "next/link"
function Nav() {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/user">
                <a>User</a>
            </Link>
        </>
    )
}

export default Nav