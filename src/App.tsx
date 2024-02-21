import { useState } from "react";
import { Homepage } from "./Homepage";
import { Button } from "./components/Button";
import { usePost } from "./hooks/usePost";
import BasicForm from "./forms/BasicForm";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [postID, setPostID] = useState(1);
  const post = usePost(postID);

  if (pageNumber === 0) return <Homepage returnHome={() => setPageNumber(1)} />;

  return (
    <>
      <button onClick={() => setPageNumber(0)}>GOTO Homepage</button>
      <div>
        <h1>Page 1!</h1>
        <Button onClick={() => setPostID(1)}>Fetch first post</Button>
        <Button onClick={() => setPostID(2)}>Fetch second post</Button>
        <Button onClick={() => setPostID(3)}>Fetch third post</Button>
        <Button onClick={() => setPostID(4)}>Fetch fourth post</Button>

        {post.status === "pending" ? (
          <div>loading</div>
        ) : post.status === "error" ? (
          <div>error</div>
        ) : (
          <pre>{JSON.stringify(post.data, null, 2)}</pre>
        )}
      </div>

      <BasicForm />
    </>
  );
}

export default App;
