import { NavLink, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation();
    return <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="movies" state={{from: location}}>Movies</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}