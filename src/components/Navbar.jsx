import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav className="Navbar">
            <div className="navbar-brand">
                <Link to="/">Movie app</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Favourites" className="nav-link">Favourites</Link>
            </div>
        </nav>
    )
}
export default Navbar