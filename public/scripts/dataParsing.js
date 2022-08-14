const buttonForToken = document.getElementById('tokenBut')
const authBtn = document.querySelector('#auth');

const getAuth = ()  => {
  fetch('/api/authSpotify', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  })
  //.then((res) => res.send('authorized'))
}



  const getToken = ()  => 
  fetch('/api/callback', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

authBtn.addEventListener('click',getAuth);
//buttonForToken.addEventListener('click', getToken())
 