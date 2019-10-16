import React from "react";

export default function PostItem({ values }) {
  console.log(values);
  return (
    <li>
      <h3>{values.title}</h3>
      <p>{values.body}</p>
    </li>
  );
}
