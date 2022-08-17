

const getPlaylists = ()  => {
    fetch('/api/profile/me/playlists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => data);
}

const renderPlaylist = (playlist) => {
    const aEl = document.createElement('a');
    const cardEl = document.createElemen('card');
    const imgEl = document.createElement('img');
    const bodyEl = 

    aEl.setAttribute('href',`/api/playlist/${playlist.id}`);
    cardEl.classList.add('card');
    cardEl.setAttribute('style','width: 18rem;');
    imgEl.classList.add('card-img-top');
    imgEl.setAttribute('src',playlist.image);

};

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

const buttonHandler = () =>
getPets().then((response) => response.forEach((item) => renderPet(item)));

termButton.addEventListener('click', buttonHandler);
