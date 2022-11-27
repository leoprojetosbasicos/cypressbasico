# Baixando iamgem do cypress mais recente(na data de criação)
FROM cypress/included:10.10.0

#definindo o diretorio de trabalho
WORKDIR cypressbasico

#copaindo os arquivos do cypress para o docker
COPY ./cypress ./cypress
COPY ./cypress.config.js .
COPY ./package.json .

#rodando os testes
RUN npm run cypress


