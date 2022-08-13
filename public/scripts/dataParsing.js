const buttonForToken = document.getElementById('tokenBut')

const getAuth = ()  => 
fetch('/api/authSpotify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const getToken = ()  => 
  fetch('/api/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  buttonForToken.addEventListener('click', getToken)
 