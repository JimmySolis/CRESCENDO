class Artist {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
    renderArtist() {
        return `<card class="card m-4 " style="width: 18rem;">
                    <img class="card-img-top" src="${this.image}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                    </div>
                    <a class="stretched-link" href="/playlist/${this.id}"></a>
                </card>`;
    }
}

module.exports = Artist;
