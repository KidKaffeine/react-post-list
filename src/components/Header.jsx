import styles from "./Header.module.css";

function Header({ isModalOpen }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Posts hits!</h1>
        <div className={styles.btnContainer}>
          <button type="button" onClick={() => isModalOpen(true)}>
            Add a new hit
          </button>
        </div>
      </header>
      <hr />
    </>
  );
}

export default Header;
