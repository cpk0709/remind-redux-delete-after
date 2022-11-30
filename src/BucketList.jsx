import { useHistory } from "react-router-dom";

const BucketList = ({ list }) => {
  const history = useHistory();
  const handleMoveToDetail = () => {
    history.push("/detail");
  };

  return (
    <div>
      {list.map((todo) => {
        return (
          <h2 key={todo.id} onClick={handleMoveToDetail}>
            {todo.title}
          </h2>
        );
      })}
    </div>
  );
};

export default BucketList;
