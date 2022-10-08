import { useLocation } from "react-router-dom"
import { StyledLink, SyledHeader } from "./HeaderStyled";

export const Header = () => {
    const location = useLocation();
    return <SyledHeader>
        <nav>
            <ul>
                <li>
                    <StyledLink to="/" end>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="movies" state={{from: location}}>Movies</StyledLink>
                </li>
            </ul>
        </nav>
    </SyledHeader>
}