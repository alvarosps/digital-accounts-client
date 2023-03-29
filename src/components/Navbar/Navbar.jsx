import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active-link">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home" activeClassName="active-link">
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
