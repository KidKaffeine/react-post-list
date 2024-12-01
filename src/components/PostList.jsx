import styles from "./PostList.module.css";
import { MdDeleteForever } from "react-icons/md";

function PostList({ posts, setPosts }) {
  
  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={styles.listItem}>
                <h4 className={styles.post}> Post hit</h4>
                <hr />
                <p>{post.text}</p>
                <div>
                  <p className={styles.author}>Author:</p>
                  <small className={styles.authorName}>{post.author}</small>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <MdDeleteForever size={20}/>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>No hits yet!</h2>
      )}
    </>
  );
}

export default PostList;
