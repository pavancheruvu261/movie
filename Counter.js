import { useState } from 'react';
import Badge from '@mui/material/Badge';

//Hooks concept
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="like-container">
      <Badge className="like-dislike" onClick={() => setLike(like + 1)} badgeContent={like} color="primary">👍</Badge>
      <Badge className="like-dislike" onClick={() => setdisLike(dislike + 1)} badgeContent={dislike} color="error">👎</Badge>
      {/* <Button variant="contained" className="like-dislike"  onClick={() =>setdisLike(dislike + 1)}>👎{dislike}</Button> */}
      {/* <button className="like-dislike"  onClick={() =>setLike(like + 1)}>👍{like}</button>
            <button className="like-dislike"  onClick={() =>setdisLike(dislike + 1)}>👎{dislike}</button> */}

      {/* <p>{like}</p> */}
    </div>
  );
}
