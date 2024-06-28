// main.js
import '../css/index.sass'
import '../css/style.css'
import '../js/age.js'
import '../js/caroussel.js'


const formData = new FormData();
formData.append('photo', photoInput.files[0]);
formData.append('title', 'My Photo');
formData.append('activity', 'My Activity');

try {
  const response = await fetch('/api/photos/upload-photo', {
    method: 'POST',
    body: formData
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}