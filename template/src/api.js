
//Extract data from API test
        // api url

        //Uncomment to use the api link
        /*const api_url = 
            "https://api.purpleair.com/v1/groups/954/members?fields=latitude%2Clongitude%2Cpm2.5_cf_1&api_key=6690E52E-B5BF-11EC-B330-42010A800004";
        
        // Defining async function
        async function getapi(url) {
            
            // Storing response
            const response = await fetch(url)
            // Storing data in form of JSON
            var dataJS = await response.json()

            const {data} = dataJS;
            // Access the first element of the array within the json from the api_url
            const sens_id= data[0][0];
            const latitude = data[0][1];
            const longitude = data[0][2];
            const pm_cf_1= data[0][3];
            document.getElementById('lat').textContent = latitude;
            document.getElementById('lon').textContent = longitude;
        }*/

        var mean_25;
        var mean_1;
        var mean_10;

        function initMap(){
            var options = {
                zoom:12,
                center:{lat:35.8543, lng:-78.8222} 
            }
            var map = new google.maps.Map(document.getElementById('map'), options);

            //Create markers
            const icons = {

            }
            //Extract data from API test
            // api url

            //Uncomment to use the api link
            const api_url = 
                "https://api.purpleair.com/v1/groups/954/members?fields=latitude%2Clongitude%2Cpm2.5_cf_1%2Cpm1.0_cf_1%2Cpm10.0_cf_1&api_key=6690E52E-B5BF-11EC-B330-42010A800004";
            
            // Defining async function
            async function getapi(url) {
                
                // Storing response
                const response = await fetch(url)
                // Storing data in form of JSON
                var dataJS = await response.json()

                const {data} = dataJS;
                // Access the data such as lat, long, and pm2.5cf1 of the nested array within the json from the api_url
                for(let i = 0; i < data.length; i++) {
                    const pm_25 = data[i][3];
                    mean_25 += pm_25;
                    const pm_1 = data[i][4];
                    mean_1 += pm_1;
                    const pm_10 = data[i][5];
                    mean_10 += pm_10;

                    var color;
                    var contentString;
                    if(pm_25 <= 12.0 ){
                        color = "#00CC00"
                        contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h2 id="firstHeading" class="firstHeading">Levels of Concern: Good</h2>' + 
                        '<div id="bodyContent">' + '<h6>PM2.5 Health Effects: Little to no risk.</h6>' +
                        "<h6>Precaution Actions: None. </h6>" + 
                        "</div>" +
                    "</div>";
                    } else if(pm_25 <= 35.4) {
                        color = "#FFFF00"
                        contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h2 id="firstHeading" class="firstHeading">Levels of Concern: Moderate</h2>' + 
                        '<div id="bodyContent">' +
                        "<h6>PM2.5 Health Effects: Unusually sensitive individuals may experience respiratory symptoms. </h6>" + '<h6>Precaution Actions: Unusally sensitive people should consider reducing pro-longed or heavy exertion.</h6>'
                        "</div>" +
                    "</div>";
                    } else if(pm_25 <= 55.4) {
                        color = "#EB8A14"
                        contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h2 id="firstHeading" class="firstHeading">Levels of Concern: Unhealthy for Sensitive Groups</h1>' + 
                        '<div id="bodyContent">' +
                        "<h6>PM2.5 Health Effects: Increasing likelihood of respiratory symptoms in sensitive individuals, aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly. </h6>" + '<h6>Precaution Actions: People with respiratory or heart disease, the elderly and children should limit prolonged exertion.</h6>'
                        "</div>" +
                    "</div>";
                    } else if(pm_25 <= 150.4) {
                        color = "#FF0000"
                        contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" + 
                        '<h2 id="firstHeading" class="firstHeading">Levels of Concern: Unhealthy</h2>' + 
                        '<div id="bodyContent">' + '<h6>PM2.5 Health Effects: Increased aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; increased respiratory effects in general population.</h6>' +
                        "<h6>Precaution Actions: People with respiratory or heart disease, the elderly and children should avoid prolonged exertion; everyone else should limit prolonged exertion. </h6>" + 
                        "</div>" +
                    "</div>";
                    } else if(pm_25 <= 250.4) {
                        color = "#A10649"
                        contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h2 id="firstHeading" class="firstHeading">Levels of Concern: Very Unhealthy</h2>' + 
                        '<div id="bodyContent">' + '<h6>PM2.5 Health Effects: Significant aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; significant increase in respiratory effects in general population.</h6>' +
                        "<h6>Precaution Actions: People with respiratory or heart disease, the elderly and children should avoid any outdoor activity; everyone else should avoid prolonged exertion. </h6>" + 
                        "</div>" +
                    "</div>";
                    } else {
                        color = "#7E0023"
                        contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h1 id="firstHeading" class="firstHeading">Levels of Concern: Hazardous</h1>' + 
                        '<div id="bodyContent">' + '<p>PM2.5 Health Effects: Serious aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; serious risk of respiratory effects in general population.</p>' +
                        "<p>Precaution Actions: Everyone should avoid any outdoor exertion; people with respiratory or heart disease, the elderly and children should remain indoors. </p>" + 
                        "</div>" +
                    "</div>";
                    } 
                    const marker = new google.maps.Marker({
                        position: new google.maps.LatLng(data[i][1], data[i][2]),
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 20,
                            fillColor: color,
                            fillOpacity: 0.7,
                            strokeWeight: 0.4
                        },
                        map: map,
                        label: {color: '#000', fontSize: '15px', fontWeight: '600',text: pm_25.toString()},
                    });



                    

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                    });
                    marker.addListener("click", () => {
                        infowindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false,
                        });
                    });
                    
                }
            }
            getapi(api_url); 
        }


        

        
        
