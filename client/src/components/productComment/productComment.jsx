import React, { useEffect, useRef, useState } from 'react';
import Comment from '../comment/comment';
import { StyledProductComment } from './productComment.styled';
import useApiCall from '../../hooks/useApiCall';
import axios from 'axios';

const ProductComment = ({ productId }) => {
  const [comments, setComments] = useState(null);
  const [payload, loading, error, fetchDataComment] = useApiCall(`/comment/${productId}`);
  let currentComment = useRef(null);

  useEffect(() => {
    if (payload?.comment) {
      setComments(payload.comment);
    }
  }, [payload]);

  if (loading) {
    return <>로딩 중...</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const onClickAdd = async (e) => {
    e.preventDefault();
    const value = currentComment.current.value;
    if (!value) {
      return;
    }
    await axios.post(`http://localhost:4000/comment/${productId}`, {
      comment: value,
    });
    fetchDataComment();
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
              <Comment
                key={index}
                index={index}
                comments={comments}
                setComments={setComments}
                comment={item}
                productId={productId}
                fetchDataComment={fetchDataComment}
              />
            ))}
      </ul>
    </StyledProductComment>
  );
};

export default ProductComment;
