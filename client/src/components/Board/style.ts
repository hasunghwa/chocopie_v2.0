import color from '@styles/Colors';
import styled from 'styled-components';

const BoardWrapper = styled.div`
  width: 100%;
  background-color: ${color.White};
  box-shadow: 0 1.4px 1.3px 0 rgb(62 73 89 / 10%);
  margin-bottom: 12px;
`;

const PostAuthor = styled.div`
  position: relative;
  display: flex;
  height: 65px;
  background-color: transparent;
  cursor: pointer;
  padding-top: 12px;
`;

const PostAuthorImg = styled.img`
  margin-left: 22px;
  margin-right: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const WriterInfo = styled.div``;

const PostMain = styled.div`
  padding: 0 22px 17px;
`;

const PostAdd = styled.div`
  border-top: 1px solid ${color.LightGray2};
  border-radius: 0 0 4px 4px;
  background: #fcfcfc;
  text-align: center;
  height: 44px;
  line-height: 46px;
  font-size: 14px;
  margin-top: 13px;
  cursor: pointer;
`;

const AddComment = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  border-top: 1px solid ${color.LightGray2};
  padding: 7px 15px 7px 10px;
`;

const CommentImput = styled.input`
  border: 1px solid ${color.LightGray2};
  line-height: 1.54;
  font-size: 13px;
  border-radius: 18px;
  width: 70%;
  padding-left: 10px;
`;

const CommentBtn = styled.button`
  border-radius: 18px;
  width: 60px;
  margin: 0 10px 0 8px;
`;

export {
  BoardWrapper,
  PostAuthor,
  PostAuthorImg,
  WriterInfo,
  PostMain,
  PostAdd,
  AddComment,
  CommentImput,
  CommentBtn,
};
