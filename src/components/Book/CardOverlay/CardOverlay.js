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
import { useLocation } from "react-router-dom"

const CardOverlay = ({ bookRank }) => {

  const location = useLocation()

    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkTheme, dark, light } = contextTheme
          const theme = isDarkTheme ? dark : light
          return (
            <Backdrop style={{background: theme.hover}}>
                <WrapperContainer variants={bookOverlayContainer}>
                    <WrapperLink to={{
                      pathname: `/detail/${bookRank}`,
                      state: { background: location },
                    }}>
                        <Icon style={{color: theme.txt}} icon={faSearchPlus} size="5x"></Icon>
                    </WrapperLink>
                </WrapperContainer>
            </Backdrop>
          );
        }}
      </ThemeContext.Consumer>
    )
};

export default CardOverlay;