# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Instalar nodemon globalmente para correr la aplicación en modo desarrollo
RUN npm install -g nodemon

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que la aplicación escucha
EXPOSE 3001

# Comando para correr la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]
