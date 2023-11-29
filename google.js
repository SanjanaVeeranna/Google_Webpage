function search() {
  const searchTerm = document.getElementById('searchInput').value;
  if (searchTerm.trim() !== '') {
      // You can perform search actions here using APIs or redirect to Google search
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
  }
}

function goToDrive(){
  window.location.href = "https://drive.google.com/drive/my-drive";
}

function goToPhotos(){
  window.location.href = "https://www.google.com/photos/about/";
}

function goToMaps(){
  window.location.href = "https://maps.google.com/";
}

function goToGmail(){
  window.location.href = "https://mail.google.com/mail/";
}

