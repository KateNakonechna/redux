import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import PostList from "./PostList";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS } from "../../store/posts/actions";

const PostsContainer = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: GET_POSTS,
          payload: posts
        })
      );
    console.log(posts);
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts}></PostList>
      {/* {postItems} */}
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPosts: () => {
//       dispatch(fetchPosts());
//     }
//   };
// };

// const mapStateToProps = state => ({
//   posts: state.posts.posts
// });

export default PostsContainer;
