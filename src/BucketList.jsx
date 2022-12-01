import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = () => {
  const my_list = useSelector((state) => state.bucket.list);
  const history = useHistory();
  const handleMoveToDetail = () => {
    history.push("/detail");
  };

  return (
    <div>
      {my_list.map((todo) => {
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
