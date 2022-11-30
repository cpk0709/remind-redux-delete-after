import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>잘못된 주소 입니다.</h1>
      <button onClick={handleGoBack}>돌아가기</button>
    </div>
  );
};

export default NotFound;
