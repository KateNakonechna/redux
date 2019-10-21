import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts }) {
  console.log(posts);
  const postslist = posts.posts.map(post => (
    <PostItem key={post.id} values={post}></PostItem>
  ));
  return <ul>{postslist}</ul>;
}
