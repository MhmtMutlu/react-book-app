import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import { useHistory } from "react-router-dom";
import { modal } from "../../motion/variants";
import { Wrapper, Backdrop, Content, CloseIconButton, Icon } from "./styles"

const Modal = ({ children }) => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };
  
  const ModalRender = (
    <>
      <Backdrop onClick={goBackHandler} />
      <Wrapper animate="visible" initial="hidden" variants={modal}>
        <Content>
          <CloseIconButton onClick={goBackHandler} icon={faTimes}>
            <Icon icon={faTimes} size="2x"></Icon>
          </CloseIconButton>
          {children}
        </Content>
      </Wrapper>
    </>
  );

  return (
    <>
        {createPortal(ModalRender, document.getElementById("modal"))}
    </>
  );
};

export default Modal;