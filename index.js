function changeContent(menu) {
  var textElement = document.getElementById("text");
  var imageElement = document.getElementById("image");
  var mainElement = document.querySelector("main");
  var columnElements = document.querySelectorAll(".column");
  var getStartedButton = document.getElementById("get-started-button");
  var viewDemoButton = document.getElementById("view-demo-button");

  mainElement.style.opacity = 0;
  columnElements.forEach(function(columnElement) {
    columnElement.style.opacity = 0;
  });

  setTimeout(function() {
    if (menu === 1) {
      document.querySelector("h2").innerHTML = "CONECT TO SMART CITIES";
      textElement.innerHTML = "";
      imageElement.src = "img/smart.png";

      var buttonContainer = document.getElementById("button-container");
      buttonContainer.classList.add("button-container-row");
      getStartedButton.style.display = "inline-block";
      viewDemoButton.style.display = "inline-block";
    } else if (menu === 2) {
      document.querySelector("h2").innerHTML = "Smart Cities: Embrace the Future of Urban Living";
      textElement.innerHTML = "Experience the future of cities! Smart Cities: where technology meets urban life for a seamless, sustainable, and connected living. Discover enhanced mobility, efficient energy, and an elevated quality of life. Join the revolution and embrace a safer, greener, and smarter city. Step into tomorrow, today!";
      imageElement.src = "img/smart6.png";

      var buttonContainer = document.getElementById("button-container");
      buttonContainer.classList.remove("button-container-row");
      getStartedButton.style.display = "none";
      viewDemoButton.style.display = "none";
    } else if (menu === 3) {
      document.querySelector("h2").innerHTML = "Welcome to the Future: Unlocking the Power of Smart Cities";
      textElement.innerHTML = "Experience the city of the future! With cutting-edge technologies like IoT, Big Data, and smart grids, we're transforming your city into a connected, efficient, and sustainable environment. Enjoy enhanced mobility, streamlined public services, smart energy solutions, and advanced security. Be part of an engaged community where your voice matters, and quality of life is elevated. Step into the future today and discover the benefits of a Smart City!";
      imageElement.src = "img/smart5.png";

      var buttonContainer = document.getElementById("button-container");
      buttonContainer.classList.remove("button-container-row");
      getStartedButton.style.display = "none";
      viewDemoButton.style.display = "none";
    } else if (menu === 4) {
      document.querySelector("h2").innerHTML = "Smart Cities: Where Innovation Meets Urban Living";
      textElement.innerHTML = "<b>Singapore:</b> Immerse yourself in Singapore, the epitome of smart cities. Experience a connected urban oasis where technology enhances every aspect of life. Embrace sustainable living in a digitally empowered society. Singapore: where dreams become reality in the smartest city.</br></br><b>São Paulo:</b> Welcome to São Paulo, the heart of smart city innovation. Embrace a metropolis blending technology and urban living. Enjoy intelligent transportation, a vibrant cultural scene, and a digital ecosystem enhancing everyday life. São Paulo: where tradition and progress create a unique smart city experience.";
      imageElement.src = "img/smart7.png";

      var buttonContainer = document.getElementById("button-container");
      buttonContainer.classList.remove("button-container-row");
      getStartedButton.style.display = "none";
      viewDemoButton.style.display = "none";
    }

    setTimeout(function() {
      mainElement.style.opacity = 1;
      columnElements.forEach(function(columnElement) {
        columnElement.style.opacity = 1;
      });
    }, 500);
  }, 500);
}
