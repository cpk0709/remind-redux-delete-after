import { useState, useRef } from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  const [list, setList] = useState([
    { title: "영화관가기", id: 1 },
    { title: "리액트 공부하기", id: 2 },
    { title: "여행가기", id: 3 },
  ]);

  const text = useRef();

  const addBucketList = () => {
    setList([...list, { title: text.current.value, id: list.length + 1 }]);
  };

  return (
    <div className="App">
      <Container>
        <Title>
          내 버킷리스트
          <span>~!</span>
        </Title>
        <HeaderLine />
        <Switch>
          <Route path="/" exact>
            <BucketList />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <NotFound />
        </Switch>
      </Container>
      <InputWrapper>
        <div>
          <input type="text" ref={text} />
          <button onClick={addBucketList}>추가하기</button>
        </div>
      </InputWrapper>
    </div>
  );
}

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  height: 80vh;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
  display: flex;
  align-items: center;
  span {
    background-color: yellow;
    border-radius: 50px;
    padding-inline: 10px;
  }
  &:hover {
    background-color: #b4ff9b;
  }
`;

const HeaderLine = styled.hr`
  margin: 16px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default App;
