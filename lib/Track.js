class Track {
    constructor(id, name, album, artist) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.artist = artist;
    }

    renderTrack() {
        return `<li class="list-group-item d-flex justify-content-start w-100 p-0" style="background-color:rgb(133, 133, 133)">
                    <h6 class="col-md-auto" style="color:white">${this.name}</h6><h6 class="col" style="color:rgb(211, 211, 211)">${this.artist} - ${this.album}</h6>
                </li>`;
    }
}


module.exports = Track;
