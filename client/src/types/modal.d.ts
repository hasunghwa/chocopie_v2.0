interface ModalData {
  title?: string;
  middleContent: ReactElement<any, any>;
  bottomRightButton?: ModalButton | null;
}

interface ModalController {
  hide: function;
  show?: function;
}

interface ModalButton {
  text: string;
  onClickHandler: function;
  color: string;
}
