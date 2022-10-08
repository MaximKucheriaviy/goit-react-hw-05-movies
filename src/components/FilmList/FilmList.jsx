import { NavLink, useLocation } from "react-router-dom";
export const FilmList = ({list, path=''}) => {
    const location = useLocation();
    return <ul>
        {list.map(({title, id}) => <li key={id}><NavLink to={`${path}${id}`} state={{from: location}}>{title}</NavLink></li>)}
    </ul>
}