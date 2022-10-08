import { useState } from "react"
import { StyledForm } from "./SearchFromStyled";

export const SearchForm = ({onSubmit}) => {
    const [searchWord, setSearchWord] = useState("");
    const chageHendler = event => {
        const {value} = event.target;
        setSearchWord(value);
    }
    const submitHendler = event => {
        event.preventDefault();
        if(!searchWord){
            return
        }
        onSubmit({keyword: searchWord.trim()});
        setSearchWord("");
    }
    return <StyledForm onSubmit={submitHendler}>
        <input 
            type="text" 
            onChange={chageHendler} 
            value={searchWord}
        />
        <button type="submit">Search</button>
    </StyledForm>
}