import styles from "./Modal.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Modal({ isModalOpen, getNewPost }) {
  const [newPost, setNewPost] = useState({
    id: uuidv4(),
    text: "",
    author: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    isModalOpen(false);
    getNewPost((state) => [...state, newPost]);
  };

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
            value={newPost.text}
            onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          />
          <label htmlFor="author" aria-label="author">
            Say your name!
          </label>
          <input
            id="author"
            name="author"
            type="text"
            required
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
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
