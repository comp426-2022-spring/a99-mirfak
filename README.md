# a99 Final Project

## UPDATE

You don't need to accept this assignment since you are already assigned to teams. So, there is not assignment invite link for a99.

## Summary 

COMP426 final project template repository.
All your code and documentation goes here.
Change this text to be a brief description of your final project.
Put the name of your project in the header above.
You will change everything below to be the main technical documentation, as outlined below.

## First steps

Other steps that you will need to take after your team has accepted the assignment:

1. Choose a license and update the LICENSE file accordingly. 
2. Edit this README.md file and use it as the main location of your technical documentation with links out to information contained under `/docs/`.
3. Create a `/docs/` directory for more elaborate documentation of your API, planning notes, etc.
4. Make sure that all of your team members have access to the repository as administrators.
5. Create a project under the **Projects** tab. Use this to manage your planning. Create a To-do list, etc. Explore the tools available and user them to manage your project.
7. Assign team roles and include a listing of those roles in this README.md file or in another file under `/docs/`.
8. Then put your entire development workflow in this repository.
9. Use **Pull requests** to propose changes and incorporate them into your code from various team members. 
10. Use **Issues** to identify and track bugs and also to communicate about various aspects of the project.

## Team mangement

Plan to meet with your team ASAP.
Talk through identifying roles within your team.

Try to figure out what each of you are good at/enjoy doing and try to work out roles that incorporate that.

Some basic roles you will want to consider:

1. A review manager - someone to review pull requests and merge or reject them and manage the related discussions
2. A plan manager - someone to keep an eye on the overall plan and keep the project tab/to-do list up to date
3. A documentation manager - someone to keep the documentation in order and identify what is missing and needs to be documented
4. A release manager - someone to manage the packaging and release process for your prototype package
5. A project manager - someone keeping track of all the moving parts and make sure that everything that needs to happen is happening.
5. Roles for team members to take charge or different parts of the project. Possible roles:
    1. Front end lead (Rohan and Ronit)
    2. Back end lead (Carter and James)
    3. Database lead (Tarun and maybe Rohan)
    4. Design lead
    5. Etc.

You will notice that there are more roles than people in your group.
That is because you will all be doing a hybrid job of managing a thing while working on other things.

## Check in with instructional staff

Schedule a few times throughout the rest of the semester for your team to check-in with your assigned instructional staff member during their scheduled office hours. 

## Assignment instructions

And that is about all you need to get started.

All the rest of the assignment instructions are available at: https://comp426.johndmart.in/a/99

Good skill and be creative!

## Endpoints

### /

Responds with an updated COVID-19 dashboard that includes national data and state data for the state that is clicked.


### /app/data/

#### Response body

```
curl http://localhost:5555/app/data/
```
```json
{"date":"2022-04-28","cases":"81156232","deaths":"991502"}
```
### /app/flips/states/

#### Response body

```
curl http://localhost:5555/app/states/
```
```
[["2022-04-28","Alabama","01","1300511","19561"],["2022-04-28","Alaska","02","251388","1212"],["2022-04-28","American Samoa","60","5517","12"],["2022-04-28","Arizona","04","2021524","29951"],["2022-04-28","Arkansas","05","835598","11381"],["2022-04-28","California","06","9218222","90277"],["2022-04-28","Colorado","08","1387221","12359"],["2022-04-28","Connecticut","09","757227","10840"],["2022-04-28","Delaware","10","262211","2906"],["2022-04-28","District of Columbia","11","141943","1340"],["2022-04-28","Florida","12","5920992","73928"],["2022-04-28","Georgia","13","2445476","36349"],["2022-04-28","Guam","66","49082","355"],["2022-04-28","Hawaii","15","241955","1415"],["2022-04-28","Idaho","16","445926","4926"],["2022-04-28","Illinois","17","3138397","37888"],["2022-04-28","Indiana","18","1700774","23570"],["2022-04-28","Iowa","19","763188","9529"],["2022-04-28","Kansas","20","775088","8597"],["2022-04-28","Kentucky","21","1336403","15415"],["2022-04-28","Louisiana","22","1237639","17244"],["2022-04-28","Maine","23","243592","2282"],["2022-04-28","Maryland","24","1030408","14449"],["2022-04-28","Massachusetts","25","1753520","20257"],["2022-04-28","Michigan","26","2425946","36002"],["2022-04-28","Minnesota","27","1450845","12773"],["2022-04-28","Mississippi","28","797413","12443"],["2022-04-28","Missouri","29","1433340","20199"],["2022-04-28","Montana","30","274143","3356"],["2022-04-28","Nebraska","31","479827","4197"],["2022-04-28","Nevada","32","718675","10752"],["2022-04-28","New Hampshire","33","309552","2479"],["2022-04-28","New Jersey","34","2255205","33423"],["2022-04-28","New Mexico","35","522094","7486"],["2022-04-28","New York","36","5136083","67648"],["2022-04-28","North Carolina","37","2660970","23415"],["2022-04-28","North Dakota","38","240968","2315"],["2022-04-28","Northern Mariana Islands","69","11263","34"],["2022-04-28","Ohio","39","2697058","38428"],["2022-04-28","Oklahoma","40","1040416","14271"],["2022-04-28","Oregon","41","719857","7502"],["2022-04-28","Pennsylvania","42","2815518","44641"],["2022-04-28","Puerto Rico","72","560517","4197"],["2022-04-28","Rhode Island","44","370920","3538"],["2022-04-28","South Carolina","45","1474272","17767"],["2022-04-28","South Dakota","46","237812","2912"],["2022-04-28","Tennessee","47","1980686","25882"],["2022-04-28","Texas","48","6746765","88274"],["2022-04-28","Utah","49","932480","4747"],["2022-04-28","Vermont","50","123455","634"],["2022-04-28","Virgin Islands","78","16306","111"],["2022-04-28","Virginia","51","1699596","20220"],["2022-04-28","Washington","53","1493919","12735"],["2022-04-28","West Virginia","54","500972","6855"],["2022-04-28","Wisconsin","55","1609007","14411"],["2022-04-28","Wyoming","56","156550","1812"]]
```
