import axios from 'axios';
import React, { useRef, useState } from 'react';
import { StyledComment } from './comment.styled';

const Comment = ({ comment, index, setComments, comments, productId, fetchDataComment }) => {
  const [commentPage, setCommentPage] = useState('comment');
  const update = useRef(null);

  const onClickUpdate = async () => {
    const value = update.current.value;
    if (!value) {
      return;
    }
    await axios.put(`http://localhost:3000/comment/${productId}`, {
      comment: value,
      index,
    });
    fetchDataComment();
    setCommentPage('comment');
  };

  // const onClickAdd = async (e) => {
  //   e.preventDefault();
  //   const value = currentComment.current.value;
  //   if (!value) {
  //     return;
  //   }
  //   await axios.post(`http://localhost:4000/comment/${productId}`, {
  //     comment: value,
  //   });
  //   fetchDataComment();
  // };

  const onClickDelete = async () => {
    await axios.delete(`http://localhost:4000/comment/${productId}/${index}`);
    fetchDataComment();
  };

  const updateComment = (
    <>
      <input className='update_input' ref={update} type='text' placeholder={comment} />
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
      <span>{comment}</span>
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
