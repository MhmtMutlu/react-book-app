import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, SearchBar, Icon, Title } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext"

const Header = () => {
  return (
    <ThemeContext.Consumer>
        {contextTheme => {
        const { isDarkTheme, dark, light } = contextTheme
        const theme = isDarkTheme ? dark : light
        return (
            <Wrapper style={{backgroundColor: theme.bg, color: theme.txt}}>
                <Icon style={{color: theme.txt}} icon={faBookOpen} size="5x" />
                <SearchBar style={{backgroundColor: theme.txt, color: theme.bg}} type="search"/>
                <Title>BOOKFOLIO</Title>
            </Wrapper> 
        )}}
    </ThemeContext.Consumer>
  );
};

export default Header;