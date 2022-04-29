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

### /app/

Responds "200 OK"

#### Response body

```
curl http://localhost:5000/app/
```
```json
{"message":"Your API works! (200)"}
```

#### Headers

```
curl -I http://localhost:5000/app/
```
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 23:57:37 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
### /app/flip/

#### Response body

```
curl http://localhost:5000/app/flip/
```
```json
{"flip":"tails"}
```
### /app/flips/:number/

#### Response body

```
curl http://localhost:5000/app/flips/4
```
```
{"raw":["tails","heads","heads","heads"],"summary":{"tails":1,"heads":3}}
```
### /app/flip/call/

#### Request body

```json
{"call":"(heads|tails)"}
```

#### Response body

```
curl -X POST -d '{"guess":"tails"}' -H 'Content-Type: application/json' http://localhost:5000/app/flip/call/
```

```json
{"call":"tails","flip":"tails","result":"win"}
```
### /app/flip/call/:guess(heads|tails)/

#### Response body

```
curl http://localhost:5000/app/flip/call/heads
```
```json
{"call":"tails","flip":"tails","result":"win"}
```
### /app/flip/coins/

#### Request body

```json
{"number":"(\d)"}
```
#### Response body

```
curl -X POST -d '{"number":"5"}' -H 'Content-Type: application/json' http://localhost:5000/app/flip/coins/
```

```json
{"raw":["heads","heads","heads","tails","tails"],"summary":{"heads":3,"tails":2}}
```
### /app/log/access/

#### Response body

```
curl http://localhost:5000/app/log/access
```

```json
[{"id":1,"remoteaddr":"::1","remoteuser":null,"time":"1651190213738.0","method":"GET","url":"/","protocol":"http","httpversion":"1.1","status":"200.0","referrer":null,"useragent":"curl/7.74.0"},{"id":2,"remoteaddr":"::1","remoteuser":null,"time":"1651190219236.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referrer":null,"useragent":"curl/7.74.0"}]
```

### /app/log/error/

_Not yet implemented_

#### Response body

```json

```
### /app/login/

_Not yet implemented_

#### Request body

```json

```
#### Response body

```json

```
#### Headers

```

```
### /app/user/login/

_Not yet implemented_

#### Request body

```json

```
#### Response body

```json

```
#### Headers

```

```
### /app/user/new/

_Not yet implemented_

#### Request body

```json

```
#### Response body

```json

```
#### Headers

```

```
### /app/user/update/

_Not yet implemented_

#### Request body

```json

```
#### Response body

```json

```
#### Headers

```

```
### /app/user/delete/

_Not yet implemented_

#### Request body

```json

```
#### Response body

```json

```
#### Headers

```

```

