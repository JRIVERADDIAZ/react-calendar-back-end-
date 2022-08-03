## React Calendar Back End
Back end for a calendar app allows to contect with a react.js front end and firebase auth 

This back end allows to create new tokens and receive it out in order toi match with the firebase token 
Allows to create, update, and delete calendar events in a mongo db
Allows to create, update and delete users on a firebase authorization sistem 

1. Install node.js 
2. Install nodemon.js
3. Run comand npm init 
4. Configure the local host port, the jwt key, and the mongoose DB url on the server, on the **./database/config.js** file  

![Config env variables](/assets/config_enviroment_variables.png)

5. Using the path, open and run the server, at this point it is able to test using postman or another  API  tester directly

> Requests:

| URL | METHOD | USAGE | KEY |
| --- | --- | --- | --- |
| localhost:4001/api/auth/new | POST | NEW USER | NO NEEDED | 
| localhost:4001/api/auth/log | POST |LOG USER | NO NEEDED |
|localhost:4001/api/auth/renew | GET | AUTO RENEW TOKEN | NO NEEDED |
|localhost:4001/api/events | GET | GET EVENTS | NO NEEDED |
|localhost:4001/api/events/ | POST | CREATE EVENTS | NO NEEDED |
|localhost:4001/api/events/ | PUT |POST  REFRESH EVENTS |  YOUR API KEY |
|localhost:4001/api/events/ | DELETE | DELETE EVENTS |  YOUR API KEY |

> Body args :  

> CREATE EVENT :
>>  {
>> "title":"Proyecto Pendiente  ",
>> "start": 1,
>> "end":100,
>> "notas": "programar mucho"
>> }  

> REFRESH EVENTS :
>> {
    "title": "Cumpleaños jefe!!!!",
            "start": "1970-01-01T00:00:00.001Z",
            "end": "1970-01-01T00:01:40.000Z",
            "notes" : "holamundo1!!!"
            }  

``` 
project tree
main
├───controllers
├───database
├───helpers
├───middlewares
├───models
├───public
├───routes
└───models
 
methods :

get-
post-
delete-

path's:

Routes :
    └───routes
        auth.js
        events.js

Validations :
   └───controllers
       auth.js 
       events.js

BD builder's :
   └───models
       Evento.js
       Usuario.js


master.
│  
│   index.js
│   package-lock.json
│   package.json
│
├───controllers
│       auth.js
│       events.js
│
├───database
│       config.js
│
├───helpers
│       isDate.js
│       jwt.js
│
├───middlewares
│       validar-campos.js
│       validar-jwt.js
│
├───models
│       Evento.js
│       Usuario.js
│
├───public
│       index.html
│       styles.css
│
└───routes
        auth.js
        events.js
        unitled1
```
