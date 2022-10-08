import styles from './styles.module.scss';

export const CastInfo = ({cast}) =>{
    const {character, profile_path, name} = cast;
    return <div>
        <div className={styles.thumb}>
            <img src={profile_path} alt={name} />
        </div>
        <p>{name}</p>
        <p>{"Character: "}<span>{character}</span></p>
    </div>
}