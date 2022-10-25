FROM node


WORKDIR /app


COPY package*.json .


# comando para rodar
RUN npm install

# copia tudo para o container
COPY . .      


# porta exposta
EXPOSE 3000


# comando para rodar
CMD ["node", "app.js"]