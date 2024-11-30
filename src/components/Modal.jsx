import styles from "./Modal.module.css";
import { useState } from "react";

function Modal({ isModalOpen }) {
  const [post, setPost] = useState({
    text: "",
    author: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault()
    isModalOpen(false)
  }

  return (
    <>
      <div className={styles.overlay}>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="text-area" aria-label="post">
            Post hit:
          </label>
          <textarea
            id="post"
            name="post"
            rows={8}
            cols={30}
            required
            minLength={10}
            value={post.text}
            onChange={(e) => setPost({ ...post, text: e.target.value })}
          />
          <label htmlFor="author" aria-label="author">
            Say your name!
          </label>
          <input
            id="author"
            name="author"
            type="text"
            required
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
          />
          <span>
            <button type="submit">Submit your hit</button>
            <button type="button" onClick={() => isModalOpen(false)}>
              Cancel your hit
            </button>
          </span>
        </form>
      </div>
    </>
  );
}

export default Modal;
