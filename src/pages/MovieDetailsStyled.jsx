import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledLink = styled(NavLink)`
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 5px;
    display: inline-block;
    text-decoration: none;
    color: black;
    &:visited{
        color: black;
    }
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 0px 2px black;
    &:hover{
        box-shadow: 0px 0px 5px black;
    }
`