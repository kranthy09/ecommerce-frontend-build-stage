# Step 1: Build Stage
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the nginx server
CMD ["npm", "start"]
