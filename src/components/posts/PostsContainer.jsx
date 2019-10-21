import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import PostList from "./PostList";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <PostList posts={this.props.posts}></PostList>
        {/* {postItems} */}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts());
    }
  };
};

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
