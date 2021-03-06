import React, { useContext } from "react";
import { faBookOpen, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, SearchBar, Icon, Title, LeftArea, ThemeToggleButton, ButtonIcon } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext"
import { BookContext } from "../../contexts/BookContext";

const Header = () => {
    const {searchBook} = useContext(BookContext)
        return (
            <ThemeContext.Consumer>
                {contextTheme => {
                const { changeTheme, isDarkTheme, dark, light } = contextTheme
                const theme = isDarkTheme ? dark : light
                return (
                    <Wrapper style={{backgroundColor: theme.bg, color: theme.txt}}>
                        <LeftArea>
                            <Icon style={{color: theme.txt}} icon={faBookOpen} size="5x" />
                            <Title>NYTimes Books</Title>
                        </LeftArea>
                        <SearchBar style={{backgroundColor: theme.txt, color: theme.bg}} type="search" onChange={searchBook} placeholder="Search for book in bestsellers..."/>
                        <ThemeToggleButton style={{backgroundColor: theme.txt}} type="button" onClick={changeTheme}>
                            <ButtonIcon style={{color: theme.bg, display: theme.lightDisplay}} icon={faMoon} size="3x" />
                            <ButtonIcon style={{color: theme.bg, display: theme.darkDisplay}} icon={faSun} size="3x" />
                        </ThemeToggleButton>
                    </Wrapper> 
                )}}
            </ThemeContext.Consumer>
        )
};

export default Header;