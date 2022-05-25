FROM node:18-alpine

#Establecemos directorio de trabajo
WORKDIR /app

# copy packages to app
COPY [ "./package.json", "./package-lock.json", "/app/" ]

#Instalamos las dependencias
RUN npm install

#Añadimos /app/node_modules/.bin al $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy all source code to app
COPY . .

# Start app
CMD ["npm", "start"]