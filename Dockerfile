# Base image
FROM node:18

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
# COPY pnpm-lock.yaml ./

# Install app dependencies
RUN corepack enable
RUN pnpm install
RUN pnpm uninstall bcrypt

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
# RUN pnpm build

EXPOSE 3000

# Start the server using the production build
CMD [ "pnpm", "start:dev" ]
# CMD [ "node", "dist/main" ]
