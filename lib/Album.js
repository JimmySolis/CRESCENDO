const Track = require('./Track');

class Album {
    constructor (id, name, artist, image, tracks) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.tracks = tracks;
    }
    renderAlbum() {
        return `<card class="card m-4 " style="width: 18rem;">
                    <img class="card-img-top" src="${this.image}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.artist}</p>
                    </div>
                    <a class="stretched-link" href="/playlist/${this.id}"></a>
                </card>`;
    }
}

module.exports = Album;
