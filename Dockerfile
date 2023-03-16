# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /thc

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# # Create a subdirectory for the app code
# RUN mkdir shards-dashboard-react

# # Set the working directory to /app
# WORKDIR /thc/shards-dashboard-react

# Copy app source code to /app
COPY . .

# # Install dependencies for the subdirectory
# RUN cd shards-dashboard-react && npm install

# Expose ports 4000 and 6000
EXPOSE 4000

# Start the subdirectory and the root directory
CMD ["npm", "start"] && npm start
