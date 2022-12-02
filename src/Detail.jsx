import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const params = useParams();
  const bucketId = params.id;
  const bucketList = useSelector((state) => state.bucket.list);

  const bucket = bucketList.find((bucket) => bucket.id === Number(bucketId));
  console.log(bucket);
  //보완필요
  return (
    <>
      <h1>내 버킷 상세페이지</h1>
      <h3>{bucket.title}</h3>
    </>
  );
};

export default Detail;
