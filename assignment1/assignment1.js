const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', async () => {
  const url = 'https://reqres.in/api/users/1';
  const options = {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
