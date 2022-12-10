function showHint(str) {
  if (str.length == 0) {
  return null;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       return this.responseText;
      }
    };
    xmlhttp.open("GET", "hintdataset.php?q=" + str, true);
    xmlhttp.send();
  }
}
