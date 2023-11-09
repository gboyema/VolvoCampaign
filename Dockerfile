FROM mcr.microsoft.com/playwright:v1.35.0-jammy

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN npm install

#Install chrome on Docker container
RUN npx playwright install

COPY . .

#Adding a non root User named "turing"
RUN useradd -m turing

#Giving Read/Write Access to non-root user to main project folder  "/app"
RUN chown -R turing /app

#Switching from root user to non-root user(turing)
USER turing

ENV npm_config_ENV=qa

CMD npm run test:parallel --ENV="qa"