function butto() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("button_div").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "navbar.html", true);
    xhttp.send();
  }

  function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "home.html", true);
    xhttp.send();
  }

  function career() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "career.html", true);
    xhttp.send();
  }

  function achivements() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "achivements.html", true);
    xhttp.send();
  }
  function about() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "about.html", true);
    xhttp.send();
  }



 /* function validate(){
    var name = document.getElementById("myform").name.value;
    var password = document.getElementById("myform").password.value;
    if(name==="nitesh" && password==='iwp'){
        window.alert('Login success');
        document.getElementById("myform").submit();
        return true;

    }
    else{
        window.alert('Invalid UserName and Password Combination');

        document.getElementById("myform").reset();
        
        return false;
    }*/
    
}

