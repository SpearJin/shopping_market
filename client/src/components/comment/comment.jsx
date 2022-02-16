import React, { useRef, useState } from 'react';
import { StyledComment } from './comment.styled';

const Comment = ({ comment, setComments, comments }) => {
  const [commentPage, setCommentPage] = useState('comment');
  const update = useRef(null);
  const word = comment.comment;

  const onClickUpdate = () => {
    const value = update.current.value;
    if (!value) {
      return;
    }
    const newComments = comments.map((item) => {
      if (item.id === comment.id) {
        return {
          ...comment,
          comment: value,
        };
      }
      return item;
    });
    setComments(newComments);
    setCommentPage('comment');
  };

  const onClickDelete = () => {
    const newComments = comments.filter((item) => item.id !== comment.id);
    setComments(newComments);
  };

  const updateComment = (
    <>
      <input className='update_input' ref={update} type='text' placeholder={word} />
      <div className='update_btns'>
        <button className='update_btn btn' onClick={onClickUpdate}>
          완료
        </button>
        <button className='update_btn btn' onClick={() => setCommentPage('comment')}>
          취소
        </button>
      </div>
    </>
  );

  const infoComment = (
    <>
      <span>{word}</span>
      <div className='info_btns'>
        <button className='info_btn btn' onClick={() => setCommentPage('update')}>
          수정
        </button>
        <button className='info_btn btn' onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </>
  );

  return (
    <StyledComment className='comment_item'>{commentPage === 'comment' ? infoComment : updateComment}</StyledComment>
  );
};

export default Comment;
