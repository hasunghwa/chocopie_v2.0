import styled from 'styled-components';
import Colors from '@styles/Colors';

const ProfileWrapper = styled.div`
  background-color: ${Colors.White};
  margin: 0 auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    gap: 20px;
  }
  li {
    display: flex;
    align-items: center;
    height: 44px;
    h3 {
      margin: 0;
      font-size: 16px;
      width: 100px;
    }
  }
`;

export { ProfileWrapper };
