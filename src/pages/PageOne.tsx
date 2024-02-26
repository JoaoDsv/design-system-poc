import { useState } from 'react';
import { Button } from '../components/Button/Button';
import BasicForm from '../forms/BasicForm';

import MultiStepForm from '../forms/MultiStepForm';
import { usePost } from '../hooks/usePost';
import { Box } from '../../styled-system/jsx';

export const PageOne = ({ returnHome }: { returnHome: () => void }) => {
  const [postID, setPostID] = useState(1);
  const post = usePost(postID);

  return (
    <>
      <button onClick={returnHome}>GOTO Homepage</button>
      <div>
        <h1>Page 1!</h1>
        <Button onClick={() => setPostID(1)}>Fetch first post</Button>
        <Button onClick={() => setPostID(2)}>Fetch second post</Button>
        <Button onClick={() => setPostID(3)}>Fetch third post</Button>
        <Button onClick={() => setPostID(4)}>Fetch fourth post</Button>

        {post.status === 'pending' ? (
          <div>loading</div>
        ) : post.status === 'error' ? (
          <div>error</div>
        ) : (
          <pre>{JSON.stringify(post.data, null, 2)}</pre>
        )}
      </div>

      <BasicForm />
      <Box maxWidth="600px" margin="100px auto 100px auto">
        <MultiStepForm />
      </Box>
    </>
  );
};
