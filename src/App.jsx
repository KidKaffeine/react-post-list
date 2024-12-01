import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import PostList from "./components/PostList";
import useLocalStorage from "use-local-storage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useLocalStorage("post", []);

  return (
    <>
      <Header isModalOpen={setOpenModal} />
      <PostList posts={posts} setPosts={setPosts} />
      {openModal && <Modal isModalOpen={setOpenModal} getNewPost={setPosts} />}
    </>
  );
}

export default App;
