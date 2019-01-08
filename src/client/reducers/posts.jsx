export default (store: Object, action: {type: "POSTS", payload:[]}) => {
  if (action.type === "POSTS") {
    return action.payload;
  }


  return store || [];
};

