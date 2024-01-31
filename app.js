function create_card(image_file_path) {
    // this function can be used to create the cards by just passing the path of the iamge file
    let carousel_container =
      document.getElementsByClassName("carousel-container")[0];
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
  
    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList.add("card-img");
  
    const img1 = document.createElement("img");
    img1.src = image_file_path;
    img1.alt = "";
  
    const img2 = document.createElement("img");
    img2.src = image_file_path;
    img2.alt = "";
  
    cardImgDiv.appendChild(img1);
    cardImgDiv.appendChild(img2);
  
    const cardBtnDiv = document.createElement("div");
    cardBtnDiv.classList.add("card-btn");
  
    const knowMoreButton = document.createElement("button");
    knowMoreButton.textContent = "Know more";
  
    cardBtnDiv.appendChild(knowMoreButton);
  
    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardBtnDiv);
  
    carousel_container.appendChild(cardDiv);
  
    // knowMoreButton.addEventListener('click', function() {
    //     clicking on button here
    // });
  }
  
  create_card(
    "https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
  );
  create_card(
    "https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
  );
  create_card(
    "https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
  );
  create_card(
    "https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
  );
  create_card(
    "https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
  );
  