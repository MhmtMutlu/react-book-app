import React from "react";
import { bookOverlayContainer } from "../../../motion/variants"
import {
  Backdrop,
  WrapperContainer,
  WrapperLink,
  Icon
} from "./styles.js"
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from "../../../contexts/ThemeContext"



class CardOverlay extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkTheme, dark, light } = contextTheme
          const theme = isDarkTheme ? dark : light
          return (
            <Backdrop style={{background: theme.hover}}>
                <WrapperContainer variants={bookOverlayContainer}>
                    <WrapperLink href="/">
                        <Icon style={{color: theme.search}} icon={faSearchPlus} size="5x"></Icon>
                    </WrapperLink>
                </WrapperContainer>
            </Backdrop>
          );
        }}
      </ThemeContext.Consumer>
    )
  }
};

export default CardOverlay;