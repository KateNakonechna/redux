import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import PostList from "./PostList";
import { useSelector, useDispatch } from "react-redux";

const PostsContainer = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  useEffect(() => {
    dispatch(fetchPosts());
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

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostsContainer);

export default PostsContainer;
