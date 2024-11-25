# Dockerfile for React + TypeScript + Vite Project

# Stage 1: Build the React application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock if available
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install # or yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build # or yarn build

# Stage 2: Serve the built application using a lightweight web server
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Instructions:
# 1. Build the Docker image:
#    docker build -t react-vite-app .
# 2. Run the Docker container:
#    docker run -p 80:80 react-vite-app
