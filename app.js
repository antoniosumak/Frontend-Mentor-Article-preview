function show() {
  if (document.documentElement.clientWidth < 710) {
    document.getElementById("pop").style.display = "none";
    if (document.getElementById("mobpop").style.visibility === "hidden") {
      document.getElementById("mobpop").style.visibility = "visible";
      document.getElementById("shar").style.backgroundColor =
        "hsl(212, 23%, 69%)";
      document.getElementById("shar").style.bottom = "-23px";
    } else {
      document.getElementById("mobpop").style.visibility = "hidden";
      document.getElementById("shar").style.backgroundColor =
        "hsl(210, 46%, 95%)";
      document.getElementById("shar").style.bottom = "-15px";
    }
  } else {
    document.getElementById("pop").style.display = "flex";
    if (document.getElementById("pop").style.visibility === "hidden") {
      document.getElementById("pop").style.visibility = "visible";
      document.getElementById("shar").style.backgroundColor =
        "hsl(217, 19%, 35%)";
    } else {
      document.getElementById("pop").style.visibility = "hidden";
      document.getElementById("shar").style.backgroundColor =
        "hsl(210, 46%, 95%)";
    }
  }
}

show();
