import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
    <div className="birthdayContainer">
    <img className="birthdayImg" src="/assets/person/post/gift.png" alt=""/>
    <span className="birthdayText">
    <b>Ralph Jenkins</b> and <b> 3 others </b> have a birthday toda!
    </span>
    </div>
    <h4 className="rightBarTitle">Online Friends</h4>

    <ul className="rightbarFriendList">
    <li className="rightbarFriend">
<div className="rightbarProfileImgContainer">
<img className="rightbarProfileImg" src="/assets/person/butterfly_close.jpg.PNG" alt="friend pic"/>

<span className="rigthbarOnline"></span>
</div>
<span className="rigthbarUsername">Jonny Lemon</span>
    </li>

    <li className="rightbarFriend">
<div className="rightbarProfileImgContainer">
<img className="rightbarProfileImg" src="/assets/person/butterfly_close.jpg.PNG" alt="friend pic"/>

<span className="rigthbarOnline"></span>
</div>
<span className="rigthbarUsername">Jonny Lemon</span>
    </li>
    
    <li className="rightbarFriend">
<div className="rightbarProfileImgContainer">
<img className="rightbarProfileImg" src="/assets/person/butterfly_close.jpg.PNG" alt="friend pic"/>

<span className="rigthbarOnline"></span>
</div>
<span className="rigthbarUsername">Jonny Lemon</span>
    </li>

    <li className="rightbarFriend">
<div className="rightbarProfileImgContainer">
<img className="rightbarProfileImg" src="/assets/person/butterfly_close.jpg.PNG" alt="friend pic"/>

<span className="rigthbarOnline"></span>
</div>
<span className="rigthbarUsername">Jonny Lemon</span>
    </li>

    </ul>
    </div>
    </div>
  )
}
