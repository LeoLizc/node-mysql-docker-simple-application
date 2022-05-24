FROM node:18-alpine

#Establecemos directorio de trabajo
WORKDIR /app

# Add app
COPY . ./

#Añadimos /app/node_modules/.bin al $PATH
ENV PATH /app/node_modules/.bin:$PATH

#Instalamos las dependencias
RUN npm install

# Start app
CMD ["npm", "start"]