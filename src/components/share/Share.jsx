import "./share.css"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/generic-profile-icon-6.jpg" alt="" />
          <input

            placeholder="What's up?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <span className="shareOptionText" >Jamming Out to?</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
