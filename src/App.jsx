import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import PostList from "./components/PostList";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <>
      <Header isModalOpen={setOpenModal} />
      <PostList posts={posts} />
      {openModal && 
      <Modal isModalOpen={setOpenModal} getNewPost={setPosts}  />}
    </>
  );
}

export default App;
