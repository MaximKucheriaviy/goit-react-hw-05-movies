import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const FinmInfo = ({movieInfo, backLocation}) => {
    const {title, popularity, overview, poster_path, genres} = movieInfo;
    return <>
            <div className={styles.filminfo}>
                <div className={styles.thumb}>
                    <img src={poster_path} alt="title"/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{`User score ${popularity}`}</p>
                    <p className={styles.subtitle}>Overview</p>
                    <p>{overview}</p>
                    <p className={styles.subtitle}>Genres</p>
                    <p className={styles.genres}>
                        {genres.map(({name, id}) => <span key={id}>{name}</span>)}
                    </p>
                </div>
            </div>
            <div className={styles.addInfo}>
                <p>Aditional information</p>
                <ul>
                    <li>
                        <NavLink to="cast" state={backLocation}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" state={backLocation}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
        </>
}