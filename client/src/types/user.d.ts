interface User {
  name: string;
  gender: string;
  birthday: string;
  phone: string;
  email: string;
  address: string;
  pw: string;
}

interface UserData {
  initialValues: string;
  middleContent: ReactElement<any, any>;
  //bottomRightButton?: ModalButton | null;
}

interface UserController {
  submit: function;
  change?: function;
}

// interface ModalButton {
//   text: string;
//   onClickHandler: function;
//   color: string;
// }
