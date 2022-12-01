import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = () => {
  const my_list = useSelector((state) => state.bucket.list);
  const history = useHistory();
  const handleMoveToDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div>
      {my_list.map((todo) => {
        return (
          <h2 key={todo.id} onClick={() => handleMoveToDetail(todo.id)}>
            {todo.title}
          </h2>
        );
      })}
    </div>
  );
};

export default BucketList;
