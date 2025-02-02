 import { useState } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Blog Post", content: "This is a sample blog post." },
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleCreate = () => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Your Posts</h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full mb-2"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2">
        Add Post
      </button>

      <h3 className="text-xl font-bold mt-4">Your Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-4">
          <h4 className="text-lg font-semibold">{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
