import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        padding: "8px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {liked ? "Liked ❤️" : "Like"}
    </button>
  );
}

export default LikeButton;
