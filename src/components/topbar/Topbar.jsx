import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Crescendo</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <input placeholder="search" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                    <span className="topbarLink">Playlists</span>
                </div>
              {/* no icons for nav bar */}
                <div className="topbarIcons">
                    <div className="topbarItem">
                        <span className="topbarIconBadge"></span>
                    </div>
                </div>
            </div>
            <img src="/assets/person/generic-profile-icon-6.jpg" alt="pfp" className="topbarImg" />
        </div>
    )
}