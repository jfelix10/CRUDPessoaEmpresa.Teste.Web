# Imagem base com Node.js para construir o projeto
FROM node:16 AS build
WORKDIR /app

# Copia os arquivos do projeto e instala as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copia todo o código fonte
COPY . ./
RUN npm run build --prod

# Imagem base para um servidor leve (Nginx)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove arquivos padrão do Nginx e adiciona os arquivos buildados
RUN rm -rf ./*
COPY --from=build /app/dist/seu-projeto-angular ./

# Exponha a porta padrão do Nginx
EXPOSE 80

# Inicializa o Nginx
CMD ["nginx", "-g", "daemon off;"]