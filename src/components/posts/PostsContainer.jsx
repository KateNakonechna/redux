import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import PostList from "./PostList";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.newPost) {
  //       this.props.posts.unshift(nextProps.newPost);
  //     }
  //   }

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

// Posts.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired,
//   newPost: PropTypes.object
// };

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsContainer);
