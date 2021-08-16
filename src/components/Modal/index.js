import { Background, ModalWrapper, CloseBtn } from './styles';

const Modal = ({ showModal, setShowModal, children }) => {
  return (
      <>
        {showModal ? (
          <Background>
            <ModalWrapper>
              <CloseBtn onClick={() => setShowModal(prev => !prev)}></CloseBtn>
              {children}
            </ModalWrapper>
          </Background>
        ) : null}
      </>
  )
}

export default Modal;