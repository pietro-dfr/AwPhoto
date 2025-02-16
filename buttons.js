function openImagePopup(imageUrl) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popup-img");
    const content = document.getElementById("image-popup-content");
    popup.style.display = "flex";
    content.style.display = "flex";
    popupImage.src = imageUrl; 
}
function closeImagePopup() {
    const popup = document.getElementById("imagePopup");
    const content = document.getElementById("image-popup-content");
    popup.style.display = "none";
    content.style.display = "none";
}
function shareImage() {
    alert("Compartilhando...")
}

function toggleLike() {
    const likeButton = document.getElementById("likeBtn");
    likeButton.classList.toggle("liked"); 
}


/*Funções pra os botão do modal da imagem*/
function downloadImage() {
    const imgElement = document.getElementById("popup-img");
    let imageUrl = imgElement.src;
    if (imageUrl.includes("picsum.photos")) {
      imageUrl = imgElement.currentSrc || imageUrl;
    }
    fetch(imageUrl)
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then(function(blob) {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        let extension = "jpg";
        if (blob.type === "image/png") {
          extension = "png";
        } else if (blob.type === "image/webp") {
          extension = "webp";
        }
        link.href = blobUrl;
        link.download = "downloaded-image." + extension;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      })
      .catch(function(error) {
        console.error("Download failed:", error);
      });
  }
  /*==========================================================================*/
  /*Botão de carregar mais imagems*/
const imageUrls = [
    'https://picsum.photos/800/600',
    'https://picsum.photos/850/600',
    'https://picsum.photos/750/500',
    'https://picsum.photos/900/700',
    'https://picsum.photos/1100/800',
    'https://picsum.photos/1000/600',
    'https://picsum.photos/1200/800',
    'https://picsum.photos/950/650',
    'https://picsum.photos/800/800',
    'https://picsum.photos/1000/900',
    'https://picsum.photos/1100/1000',
    'https://picsum.photos/1050/750',
    'https://picsum.photos/850/850',
    'https://picsum.photos/800/1200',
    'https://picsum.photos/900/900',
    'https://picsum.photos/1200/1000',
    'https://picsum.photos/950/1100',
    'https://picsum.photos/1000/1100',
    'https://picsum.photos/1150/1000'
  ];
  
  let currentIndex = 0;
  
  const loadMoreImages = () => {
    const container = document.querySelector('main');
    for (let i = 0; i < 5; i++) {
      if (currentIndex >= imageUrls.length) {
        imageUrls.push(
          'https://picsum.photos/1200/800',
          'https://picsum.photos/1300/900',
          'https://picsum.photos/1400/1000',
          'https://picsum.photos/1100/1100',
          'https://picsum.photos/800/500'
        );
      }
      const imgUrl = imageUrls[currentIndex];
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('img-container');
      imgDiv.style.cssText = `
        background-image: url('${imgUrl}');
        background-size: cover;
        background-position: center;
      `;
      imgDiv.addEventListener('click', () => openImagePopup(imgUrl));
      container.appendChild(imgDiv);
      currentIndex++;
    }
  };
  
  document.querySelector('.load').addEventListener('click', loadMoreImages);
  