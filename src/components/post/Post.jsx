import "./post.css"
import {Users} from "../../dummyData"

export default function Post({ post }) {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="pfp" />
            <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">

          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="heartIcon" src="/assets/person/post/heart.png" alt="heart" />
            <img className="likeIcon" src="/assets/person/post/like.png" alt="like" />
            <span className="postLikeCounter">{post.like} People Liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
