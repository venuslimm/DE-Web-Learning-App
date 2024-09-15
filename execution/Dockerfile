FROM nikolaik/python-nodejs:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

RUN npm run build

# Install Python packages
RUN pip install psycopg2 plotly pandas

CMD ["npm", "run", "start"]