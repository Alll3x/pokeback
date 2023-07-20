# PokeProject
  ## Propósito do Projeto
O projeto ou pokeproject tem o propósito de servir como portifólio, e material de estudo. Consumindo uma api de pokemons é possível criar uma conta, pesquisar os pokemons, e ver todas as suas informações, como estástisticas, natures, ataques e variações. Pode-se adicionar um pokemon a uma lista de favoritos, além disso é possível montar times com várias combinações dos monstrinhos.
  ## Purpose of Project
The project or pokeproject is intended to serve as a portfolio and study material. Consuming a pokemons api it is possible to create an account, search for pokemons, and see all their information, such as statistics, natures, attacks and variations. You can add a pokemon to a favorites list, in addition it is possible to assemble teams with various combinations of the little monsters.

## For Devs
  ### Apis/ Libs Documentation
- _Node_: https://nodejs.org/en/docs
- _Nodemon_: https://nodemon.io
- _Express_: https://expressjs.com
- _DotEnv_: https://www.dotenv.org/docs/
- _Docker_: https://docs.docker.com
- _MySql_: https://dev.mysql.com/doc/
- _Prisma_: https://www.prisma.io/docs/getting-started
- _Prisma example_: https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-express/README.md
- _Bcrypt_: https://github.com/kelektiv/node.bcrypt.js#readme
- _Yup_: https://www.npmjs.com/package/yup
- _Cors_: https://github.com/kelektiv/node.bcrypt.js#readme
- _Pokemon Api_: https://pokeapi.co/docs/v2#pokemon-section 

### Tutorials 
- _API usando NODEJS, PRISMA e DOCKER_: https://www.youtube.com/watch?v=gnq8ZY85UUM

### Comands
  #### _Prisma Migrate_ 
    npx prisma migrate dev --name "NAME"
  #### _Run the docker_
    docker compose -f "docker-compose.yml" up -d --build 
  #### _Run the project_
    npm run dev


### Routes Map
  #### Get
- /users: get all user
- /user/:id: get user by id
- /team/:id: get team by id
- /pokemon/:idOrName: get pokemon by id or name  

  #### Post 
- /register: user register
- /login: user login
- /createTeam: create team