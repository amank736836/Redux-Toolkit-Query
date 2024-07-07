import { useState } from "react";
import PostsCard from "./components/PostsCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

function App() {
  // const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const { isLoading, data } = useGetPostsQuery("");
  console.log(isLoading, data);
  const [newPost] = useNewPostMutation();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post:Post = {
      title,
      body,
      userId: Math.floor(Math.random() * 1000),
      id: Math.floor(Math.random() * 1000),
    }
    newPost(post);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>MyApp</h1>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((post) => <PostsCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default App;
