# Use Node.js Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Set Node.js to run in development mode by default
ENV NODE_ENV=development

# Use non-root user for security
USER node

# Start the application (will be overridden by docker-compose in dev mode)
CMD ["node", "app.js"]
