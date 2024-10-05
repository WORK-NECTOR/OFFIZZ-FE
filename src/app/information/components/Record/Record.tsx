import React from 'react'
import {
    RecodeWapper,
    RecodeBox,
    RecodeImg,
    RecodeTitle,
    RecodeSub,
    RecodeComment
  } from './Record.styled';
import local from '../../../../../public/local.png';
import Image from 'next/image';

function Recode() {

const sample = [
    {
      "vacationTodoId": 1,
      "title": "해변에서의 하루",
      "locate": "제주도",
      "comment": "일출과 일몰을 즐기고, 해변에서 산책하기ㅇㅇㅇㅓㅓ",
      "image": "https://via.placeholder.com/300"
    },
    {
      "vacationTodoId": 2,
      "title": "산 정상에서의 하이킹",
      "locate": "한라산",
      "comment": "정상에서의 멋진 경치를 감상하기",
      "image": "https://via.placeholder.com/300"
    }
  ]

  const truncateComment = (comment: string) => {
    return comment.length > 18 ? comment.slice(0, 20) + '...' : comment;
  };

  return (
    <RecodeWapper>
        {sample.map(item => (
                <RecodeBox key={item.vacationTodoId}>
                    <RecodeImg>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          style={{ width: '100%', height: 'auto' ,borderRadius:'0.5rem'}}
                        />
                    </RecodeImg>
                    <div>
                        <RecodeTitle>{item.title}</RecodeTitle>
                        <RecodeSub>
                            <Image src={local} alt='local' width={12} height={12} style={{marginRight:'0.5rem'}}/>
                            {item.locate}
                        </RecodeSub>
                        <RecodeComment>{truncateComment(item.comment)}</RecodeComment>
                    </div>
                </RecodeBox>
        ))}
    </RecodeWapper>
  )
}

export default Recode;
