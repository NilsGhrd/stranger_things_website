// Home pagina
if(document.title == 'Stranger Things') {
  var videoCoverIndex = document.getElementById("cover");
  var playButtonIndex = document.getElementById("play");

  videoCoverIndex.onclick= function(event){
    console.log("klikkkk")
    playButtonIndex.classList.add("playEvent");
    videoCoverIndex.classList.add("playEventBg");
  }

  playButtonIndex.onclick= function(event){
    console.log("klikkkk")
    playButtonIndex.classList.add("playEvent");
    videoCoverIndex.classList.add("playEventBg");
  }
}



// Trailer pagina
if(document.title == 'Stranger Things - Trailers') {
  var closeBanner = document.getElementById("close");
  var warningBanner = document.getElementsByClassName("warning");

  var checkbox = document.getElementById("checkbox");
  var spoilers = document.getElementsByClassName("spoiler")

  console.log(checkbox);

  closeBanner.onclick= function(event){
    console.log("hola")
    warningBanner[0].style.visibility="hidden";
    warningBanner[0].style.opacity="0";
  }

  checkbox.onclick= function(event){
    if(checkbox.checked == true){
      spoilers[0].style.display = "block"
      spoilers[1].style.display = "block"
      spoilers[2].style.display = "block"
      spoilers[3].style.display = "block"
    } else {
      spoilers[0].style.display="none";
      spoilers[1].style.display="none";
      spoilers[2].style.display="none";
      spoilers[3].style.display="none";
    }
  }
}


// Characters pagina
if(document.title == 'Stranger Things - Characters') {
  var closeBanner = document.getElementById("close");
  var warningBanner = document.getElementsByClassName("warning");

  var characters = document.getElementsByClassName("character")

  var s1Button =  document.getElementById("js-s1");
  var s2Button =  document.getElementById("js-s2");
  var s3Button =  document.getElementById("js-s3");

  var s1Active = false;
  var s2Active = false;
  var s3Active = false;

  closeBanner.onclick= function(event){
    console.log("hola")
    warningBanner[0].style.visibility="hidden";
    warningBanner[0].style.opacity="0";
  }

  s1Button.onclick = function(event){
    if(s1Active == false){
      s1Button.classList.add("set");
      s1Active = true;
      filter();
    } else {
      s1Button.classList.remove("set");
      s1Active = false;
      filter();
    }
  }

  s2Button.onclick = function(event){
    if(s2Active == false){
      s2Button.classList.add("set");
      s2Active = true;
      filter();
    } else {
      s2Button.classList.remove("set");
      s2Active = false;
      filter();
    }
  }

  s3Button.onclick = function(event){
    if(s3Active == false){
      s3Button.classList.add("set");
      s3Active = true;
      filter();
    } else {
      s3Button.classList.remove("set");
      s3Active = false;
      filter();
    }
  }

  function filter(){
    for(var i = 0; i < characters.length; i++){
      if(s1Active === true || s2Active === true || s3Active === true){
        characters[i].style.display = "none";
      }

      if(s1Active === true && characters[i].dataset.one === "true"){
        characters[i].style.display = "";
      }

      if(s2Active === true && characters[i].dataset.second === "true"){
        characters[i].style.display = "";
      }

      if(s3Active === true && characters[i].dataset.third === "true"){
        characters[i].style.display = "";
      }

      if(s1Active === false && s2Active === false && s3Active === false){
        characters[i].style.display = "";
      }
    }
  }
}

if(document.title == 'Stranger Things - Webshop') {
  var totalPrice = 0;
  var amount = 0;
  var buttonAdd = document.getElementsByClassName("addButton");

  for(var i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].setAttribute("name", i);
    buttonAdd[i].addEventListener("click", locatePrice, false);
  }

  function locatePrice() {
    addPrice(this.name)
  }

  function addPrice(index) {
    productPrice = buttonAdd[index].getAttribute("data-price");
    productPrice = parseFloat(productPrice);
    totalPrice += productPrice;
    amount += 1;
    if (amount > 1) {
      var product = " Producten "
    } else {
      var product = " Product "
    }
    document.getElementById("price").innerHTML = "€ " + totalPrice.toFixed(2).toString();
    document.getElementById("amount").innerHTML = "Aantal: " + amount.toString();
    document.getElementById("total").innerHTML =  amount.toString() + product + "€ " + totalPrice.toFixed(2).toString();
  }
}
