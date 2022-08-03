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
5. 
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
