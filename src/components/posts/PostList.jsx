import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts }) {
  const postslist = posts.map(post => (
    <PostItem key={post.id} values={post}></PostItem>
  ));
  return <ul>{postslist}</ul>;
}
