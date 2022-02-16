import React, { useRef, useState } from 'react';
import Comment from '../comment/comment';
import { StyledProductComment } from './productComment.styled';

const ProductComment = (props) => {
  const [comments, setComments] = useState([]);
  let currentComment = useRef(null);

  const onClickAdd = (e) => {
    e.preventDefault();
    const value = currentComment.current.value;
    if (!value) {
      return;
    }
    setComments([{ id: Date.now(), comment: value }, ...comments]);
    currentComment.current.value = '';
    currentComment.current.focus();
  };

  const notComment = (
    <li className='add_not'>
      <p className='add__title'>댓글이 없습니다...</p>
    </li>
  );

  return (
    <StyledProductComment>
      <form className='info_add'>
        <input className='info_input' ref={currentComment} type='text' />
        <button className='info_btn btn' onClick={onClickAdd}>
          추가
        </button>
      </form>
      <ul className='comment_list'>
        {!comments || comments.length === 0
          ? notComment
          : comments.map((item, index) => (
              <Comment key={index} comments={comments} setComments={setComments} comment={item} />
            ))}
      </ul>
    </StyledProductComment>
  );
};

export default ProductComment;
