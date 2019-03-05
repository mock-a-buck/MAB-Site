// Product Sizes
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

  // Product Images
function openImg(evt, imgName) {
    // Declare all variables
    var a, productimgdisplay, selectors;
  
    // Get all elements with class="tabcontent" and hide them
    productimgdisplay = document.getElementsByClassName("product-img-display");
    for (a = 0; a < productimgdisplay.length; a++) {
        productimgdisplay[a].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    selectors = document.getElementsByClassName("selectors");
    for (a = 0; a < selectors.length; a++) {
        selectors[a].className = selectors[a].className.replace(" selected", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(imgName).style.display = "block";
    evt.currentTarget.className += " selected";
  }

  document.getElementById("defaultSelected").click();