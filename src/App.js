import React from 'react';
import styled from 'styled-components';
import './style.css';

// 컴포넌트 생성
const SimpleButton = styled.button`
  background-color: green;
  color: white;
  border: 0px;
`;

// 컴포넌트 재사용
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 일반적인 리액트 스타일 버튼
const ReactButton1 = (props) => {
  //return <button>{props.children}</button>
  return <button className={props.className}>{props.children}</button>; // 스타일드 컴포넌트로 적용하려면 className을 적용해줘야함...
};

// 리액트 버튼을 스타일드 컴포넌트로
const ReactButton2 = styled(ReactButton1)`
  font-size: 50px;
`;

// prop에 따라 스타일드 컴포넌트를 동적으로 바꿈.
const PrimaryButton = styled.button`
  background-color: white;
  color: ${(props) => {
    if (props.primary !== undefined) {
      return 'blue';
    } else {
      return 'black';
    }
  }};
  border: 0px;
`;

export default function App() {
  return (
    <div>
      <SimpleButton>버튼</SimpleButton>
      <LargeButton>큰버튼</LargeButton>
      <ReactButton1>리액트버튼1</ReactButton1>
      <ReactButton2>리액트버튼2</ReactButton2>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}
