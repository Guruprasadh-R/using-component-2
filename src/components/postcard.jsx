import LikeButton from "./likebutton";

function PostCard({ profilePic, username, content }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <img src={profilePic} alt="Profile" style={{ width: "50px", borderRadius: "50%" }} />
      <h4>{username}</h4>
      <p>{content}</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;
