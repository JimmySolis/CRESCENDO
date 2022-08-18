import "./sidebar.css"

export default function Sidebar() {
    return (
       <div className="sidebar">
              <div className="sidebarWrapper">
                     <ul className="sidebarList">
              <li className="sidebarListItem">
              <span className="sidebarListItemText">Feed</span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebarListItemText">Playlists</span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebarListItemText">Home</span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebarListItemText">Chats</span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebarListItemText">Bookmarks</span>
              </li>
              </ul>
              <button className="sidebarButton">Show More</button>
              <hr className="sidebarHr"/>
              <ul className="sidebarFriendList">

              <li className="sidebarFriend">
              <img className="sidebarfriendImg" src="/assets/person/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg" alt="friend pfp"/>
                     <span className="sidebarFriendName">Jane Doe</span>
              </li>

              <li className="sidebarFriend">
              <img className="sidebarfriendImg" src="/assets/person/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg" alt="friend pfp"/>
                     <span className="sidebarFriendName">Jane Doe</span>
              </li>

              <li className="sidebarFriend">
              <img className="sidebarfriendImg" src="/assets/person/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg" alt="friend pfp"/>
                     <span className="sidebarFriendName">Jane Doe</span>
              </li>

              <li className="sidebarFriend">
              <img className="sidebarfriendImg" src="/assets/person/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg" alt="friend pfp"/>
                     <span className="sidebarFriendName">Jane Doe</span>
              </li>

              <li className="sidebarFriend">
              <img className="sidebarfriendImg" src="/assets/person/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg" alt="friend pfp"/>
                     <span className="sidebarFriendName">Jane Doe</span>
              </li>
              </ul>
              </div>
       </div>

        )}