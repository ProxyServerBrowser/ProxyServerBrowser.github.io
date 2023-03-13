let Output
function Write(data){
Output = data
}
function getJSON(name) {
    fetch(name)
  .then(response => response.json())
  .then(data => Write(data))
  .catch(error => console.error(error));
    return Output
}