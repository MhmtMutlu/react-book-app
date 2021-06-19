import React from "react";
import { bookOverlayContainer } from "../../../motion/variants"
import {
  Backdrop,
  WrapperContainer,
  WrapperLink,
  Icon
} from "./styles.js"
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'



const ProductOverlay = (props) => {

  return (
    <Backdrop>
        <WrapperContainer variants={bookOverlayContainer}>
            <WrapperLink href="/">
                <Icon icon={faSearchPlus} size="5x"></Icon>
            </WrapperLink>
        </WrapperContainer>
    </Backdrop>
  );
};

export default ProductOverlay;