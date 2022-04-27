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


// var statesData;

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => statesData = data)
//   .then(() => console.log(statesData))


// fetch('http://localhost:5555/app/states/')
//   .then(function(response) {
//   return response.json();
//   })
//   .then(function(result) {
//       const statesData2 = result;
//   })