fetch('http://localhost:5555/app/data/')
.then(function(response) {
return response.json();
})
.then(function(result) {
  console.log(result);
  document.getElementById("date").innerHTML = result.date;
  document.getElementById("deaths").innerHTML = result.deaths;
  document.getElementById("cases").innerHTML = result.cases;
})