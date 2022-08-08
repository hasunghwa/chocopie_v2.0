import styled from 'styled-components';
import Colors from '@styles/Colors';

const Content = styled.div`
  width: 330px;
  margin-left: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 150px;
`;

const ComfirmBtn = styled.button`
  padding: 3px 10px;
`;

const ChangeBtn = styled.button`
  padding: 3px 10px;
  border: 1px solid ${Colors.LightGray};
  background-color: ${Colors.White};
`;

const CancelBtn = styled(ChangeBtn)`
  margin-left: 12px;
`;

export { Content, ButtonWrapper, ComfirmBtn, CancelBtn, ChangeBtn };
