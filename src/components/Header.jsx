import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="navbar">
            <Link to="/" className="logo">
                DEV@Deakin
            </Link>

            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
            />

            <div className="nav-links">
                <Link to="/post">Post</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>
    )
}

export default Header