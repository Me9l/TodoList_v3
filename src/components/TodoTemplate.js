import React from 'react';
import { styled } from 'styled-components';

const TodoTemplateBlock = styled.div `
    margin: 0 auto;

    width : 512px;
    height : 798px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin-top: 96px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;