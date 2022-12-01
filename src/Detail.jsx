import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const params = useParams();
  const bucketId = params.id;
  const bucketList = useSelector((state) => state.bucket.list);

  const bucket = bucketList.filter((bucket) => bucket.id === Number(bucketId));
  //보완필요
  return (
    <>
      <h1>상세페이지</h1>
      <h3>{bucket[0].title}</h3>
    </>
  );
};

export default Detail;
