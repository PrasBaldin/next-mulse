import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link href="" className="navbar-brand"></Link>
                <div className="nav-toggle"></div>
                <div className="nav-expand"></div>
            </div>
        </nav>
    )
}

export default Navbar