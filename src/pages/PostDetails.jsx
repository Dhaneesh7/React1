import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is a sample blog post." },
  { id: 2, title: "Second Blog Post", content: "Another interesting post." },
];

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <div className="p-6">
      {post ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostDetails;
