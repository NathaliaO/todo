Laravel 10 + Vuejs

Clone o Projeto = https://github.com/NathaliaO/todo.git

Acesse a pasta do projeto e rode o comando

docker compose up -d

Duplique e renomei o .env.example para .env

Acesse o container

docker compose exec app bash

Quando estiver dentro do container

composer install

Em seguida saia do container com o comando exit

E rode: npm install --force

Rode o comando abaixo para executar a aplicação. 

npm run dev

Acesse: localhost:8989


** Para rodar os testes, entre no container novamente

docker compose exec app bash

E depois rode

vendor/bin/phpunit