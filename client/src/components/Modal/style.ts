import styled from 'styled-components';
import Colors from '@styles/Colors';

interface IHideAnimation {
  isHidden: boolean;
}

const Wrapper = styled.div<IHideAnimation>`
  background-color: ${Colors.White};
  padding: 0 20px;
  position: relative;
  max-width: 600px;
  z-index: 999;
  min-width: 300px;
  animation: ${props => (props.isHidden ? 'zoomOut' : 'zoomIn')} 0.3s forwards;
  &:hover {
    cursor: default;
  }
  @keyframes zoomIn {
    0% {
      transform: scale(0.6);
    }
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes zoomOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

const TopRightButton = styled.button`
  position: absolute;
  right: 20px;
  top: 17px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
`;

const BottomRightButton = styled.button`
  padding: 8px 16px;
  border-radius: 1px;
  color: white;
  background-color: ${props => props.color || Colors.DarkGray};
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px 0;
`;

const Background = styled.div<IHideAnimation>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;
  display: flex;
  animation: ${props => (props.isHidden ? 'fadeOut' : 'fadeIn')} 0.3s forwards;
  backdrop-filter: blur(1px);
  &:hover {
    cursor: default;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

export {
  Background,
  Wrapper,
  TopRightButton,
  Top,
  Title,
  BottomRightButton,
  Bottom,
};
