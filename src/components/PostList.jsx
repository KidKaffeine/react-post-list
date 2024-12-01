import styles from "./PostList.module.css";

function PostList({ posts }) {
  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={styles.listItem}>
                <h4 className={styles.post}> Post hit</h4>
                <hr/>
                <p>{post.text}</p>
                <div>
                  <p className={styles.author}>Author:</p>
                  <small className={styles.authorName}>{post.author}</small>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>No posts yet</h2>
      )}
    </>
  );
}

export default PostList;
