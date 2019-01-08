export default async function initPosts() {
  let posts = [];
  await new Promise(resolve => {
    resolve([
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur "
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor "
      }
    ]);
  }).then(data => {
    posts = data;
  });

  const options = {
    initialState: {
      posts: []
    }
  };
  options.initialState.posts = posts;
  return options;
}
