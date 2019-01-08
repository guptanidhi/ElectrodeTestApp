import fetch  from "isomorphic-fetch";


export default () => {
  return dispatch => {

    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response: {}) => {
        if (response.status >= 400) {
          dispatch({
            type: "POSTS",
            payload: response.data
          });
        }
        return response.json();
      })
      .then((posts: []) => {
        dispatch({
          type: "POSTS",
          payload: posts
        });
      });
  };
};
