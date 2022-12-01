// Actions
const CREATE = "bucket/CREATE";

const initialState = {
  list: [
    { title: "영화관가기", id: 1 },
    { title: "리액트 공부하기", id: 2 },
    { title: "여행가기", id: 3 },
  ],
};

// Action Creators
export function createBucket(bucket) {
  console.log(bucket);
  return { type: CREATE, bucket };
}

// 미들웨어
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/CREATE": {
      const new_bucket_list = [
        ...state.list,
        { title: action.bucket, id: state.list.length + 1 },
      ];
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
