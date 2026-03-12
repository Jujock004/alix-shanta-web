FROM node:20-alpine

# Installation de libc6-compat (nécessaire pour Next.js sur Alpine Linux)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# On installe les dépendances en premier (pour le cache Docker)
COPY package.json package-lock.json* ./
RUN npm install

# On copie le reste du code
COPY . .

# On expose le port de Next.js
EXPOSE 3000

# IMPORTANT : On lance le mode DEV pour avoir le Hot Reload
CMD ["npm", "run", "dev"]