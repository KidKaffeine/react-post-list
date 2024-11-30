function PostList({ posts }) {
    console.log(posts)

  return (
    <>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => {
            return <li>
                <p>{post.text}</p>
                <p>{post.author}</p>
            </li>
          })}
        </ul>
      ) : (
        <h2>No posts yet</h2>
      )}
    </>
  );
}

export default PostList;
