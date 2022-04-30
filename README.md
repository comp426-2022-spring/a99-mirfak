# a99 Final Project

## mirfak COVID-19 dashboard 

The mirfak COVID-19 dashboard is a user-friendly display of relevant COVID-19 information for the United States. It displays national COVID-19 data and data for each U.S. state and territory. The data shown is the cumulative cases and deaths up until the current date. It is displayed on a clickable map that shows the data for the state that is clicked.

## Installation

In order to install the COVID-19 Dashboard, follow steps at https://github.com/comp426-2022-spring/a99-mirfak/blob/main/docs/instructions.md

## Team mangement

Team Mirfak consisted of students from the University of North Carolina at Chapel Hill and Duke University. Visit https://github.com/comp426-2022-spring/a99-mirfak/blob/main/docs/team.md to learn more about the roles of our team members, Rohan Venkatraman, Ronit Ray, Carter Goldman, and Tarun Amasa.


## Endpoints

### /main.html

The front end of the website is an updated COVID-19 dashboard that includes national data and state data for the state that is clicked. It can be accessed by visiting http://localhost:5555/


### /app/data/

This enpoint is used to pull the national covid data from the New York Times public csv found at https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv. It uses the http dependency to get this data and the fs dependency to write it to a local file. After the data is written, it is parsed in JSON format. Only the current day's data is sent to the endpoint. 

#### Response body

```
curl http://localhost:5555/app/data/
```
```json
{"date":"2022-04-28","cases":"81156232","deaths":"991502"}
```
### /app/states/

#### Response body

This enpoint is used to pull the state covid data from the New York Times public csv found at https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv. It uses the http dependency to get this data and the fs dependency to write it to a local file. After the data is written, it is parsed in JSON format. Only the current day's data is sent to the endpoint. 
```
curl http://localhost:5555/app/states/
```
```
[["2022-04-28","Alabama","01","1300511","19561"],["2022-04-28","Alaska","02","251388","1212"],["2022-04-28","American Samoa","60","5517","12"],["2022-04-28","Arizona","04","2021524","29951"],["2022-04-28","Arkansas","05","835598","11381"],["2022-04-28","California","06","9218222","90277"],["2022-04-28","Colorado","08","1387221","12359"],["2022-04-28","Connecticut","09","757227","10840"],["2022-04-28","Delaware","10","262211","2906"],["2022-04-28","District of Columbia","11","141943","1340"],["2022-04-28","Florida","12","5920992","73928"],["2022-04-28","Georgia","13","2445476","36349"],["2022-04-28","Guam","66","49082","355"],["2022-04-28","Hawaii","15","241955","1415"],["2022-04-28","Idaho","16","445926","4926"],["2022-04-28","Illinois","17","3138397","37888"],["2022-04-28","Indiana","18","1700774","23570"],["2022-04-28","Iowa","19","763188","9529"],["2022-04-28","Kansas","20","775088","8597"],["2022-04-28","Kentucky","21","1336403","15415"],["2022-04-28","Louisiana","22","1237639","17244"],["2022-04-28","Maine","23","243592","2282"],["2022-04-28","Maryland","24","1030408","14449"],["2022-04-28","Massachusetts","25","1753520","20257"],["2022-04-28","Michigan","26","2425946","36002"],["2022-04-28","Minnesota","27","1450845","12773"],["2022-04-28","Mississippi","28","797413","12443"],["2022-04-28","Missouri","29","1433340","20199"],["2022-04-28","Montana","30","274143","3356"],["2022-04-28","Nebraska","31","479827","4197"],["2022-04-28","Nevada","32","718675","10752"],["2022-04-28","New Hampshire","33","309552","2479"],["2022-04-28","New Jersey","34","2255205","33423"],["2022-04-28","New Mexico","35","522094","7486"],["2022-04-28","New York","36","5136083","67648"],["2022-04-28","North Carolina","37","2660970","23415"],["2022-04-28","North Dakota","38","240968","2315"],["2022-04-28","Northern Mariana Islands","69","11263","34"],["2022-04-28","Ohio","39","2697058","38428"],["2022-04-28","Oklahoma","40","1040416","14271"],["2022-04-28","Oregon","41","719857","7502"],["2022-04-28","Pennsylvania","42","2815518","44641"],["2022-04-28","Puerto Rico","72","560517","4197"],["2022-04-28","Rhode Island","44","370920","3538"],["2022-04-28","South Carolina","45","1474272","17767"],["2022-04-28","South Dakota","46","237812","2912"],["2022-04-28","Tennessee","47","1980686","25882"],["2022-04-28","Texas","48","6746765","88274"],["2022-04-28","Utah","49","932480","4747"],["2022-04-28","Vermont","50","123455","634"],["2022-04-28","Virgin Islands","78","16306","111"],["2022-04-28","Virginia","51","1699596","20220"],["2022-04-28","Washington","53","1493919","12735"],["2022-04-28","West Virginia","54","500972","6855"],["2022-04-28","Wisconsin","55","1609007","14411"],["2022-04-28","Wyoming","56","156550","1812"]]
```
