 import { useState } from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is a sample blog post" },
  { id: 2, title: "Second Blog Post", content: "Another interesting post" },
];

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPosts.map((post) => (
        <div key={post.id} className="border p-4 mb-4 rounded shadow">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`} className="text-blue-500">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
