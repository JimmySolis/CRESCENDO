import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
    <div className="feedbarWrapper">
    <Share/>
    
    {Posts.map(p=>(
    <Post key={p.id} post={p}/> //bc all of the dummy data has an id that should be used
    ))}
    
    </div>
  </div>
  )
}
