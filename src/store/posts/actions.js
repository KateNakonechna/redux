export const GET_POSTS = "GET_POSTS";

export const getPostAction = posts => ({
  type: GET_POSTS,
  payload: posts
});

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => dispatch(getPostAction(posts)));
};
