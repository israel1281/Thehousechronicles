# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /thc

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code to /app
COPY . .

# Expose port 3000 for the app
EXPOSE 4000

# Start the app
CMD [ "npm", "start" ]
