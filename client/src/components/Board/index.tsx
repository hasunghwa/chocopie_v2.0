import React, { useState } from 'react';
import {
  BoardWrapper,
  PostAuthor,
  PostAuthorImg,
  WriterInfo,
  PostMain,
  PostAdd,
  AddComment,
  CommentImput,
  CommentBtn,
} from './style';

interface BoardProps {
  id: number;
  authorName: string;
  authorImg: string;
  title: string;
  content: string;
  //item : object
  //thumbnail : image
  //views : number
  postDate: string;
  //date_updated : models.DateTimeField(blank:True, null:True)
  //is_noticed : models.BooleanField(blank=True, null=True)
}

const Board = () => {
  const [isComment, setIsComment] = useState<boolean>(false);
  const BoardItem: BoardProps = {
    id: 1,
    authorName: '몰라',
    authorImg: '/img/default-user.jpg',
    title: '제목',
    content: '내용',
    postDate: '2022-07-21',
  };

  return (
    <BoardWrapper>
      <PostAuthor>
        <PostAuthorImg src={BoardItem.authorImg} />
        <WriterInfo>
          <h4>{BoardItem.title}</h4>
          <p>{BoardItem.postDate}</p>
        </WriterInfo>
      </PostAuthor>
      <PostMain>{BoardItem.content}</PostMain>
      <PostAdd onClick={() => setIsComment(true)}>댓글쓰기</PostAdd>
      {isComment ? (
        <AddComment>
          <CommentImput placeholder="댓글을 남겨주세요."></CommentImput>
          <CommentBtn>쓰기</CommentBtn>
        </AddComment>
      ) : null}
    </BoardWrapper>
  );
};
export default Board;
