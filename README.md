# Node.js Cloud-Ready Application

A production-ready Node.js application with Docker containerization, optimized for cloud deployment.

## Features

- 🚀 Express.js REST API
- 🔒 Security best practices with Helmet and CORS
- 🗜️ Response compression for better performance
- 🐳 Docker containerization
- ♨️ Hot-reload in development
- 🔍 Health check endpoint
- ⚡ Production-optimized build

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd NodeJS-milestone-5.2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment file:
   ```bash
   cp .env.example .env
   ```

4. Start with Docker Compose:
   ```bash
   docker-compose up
   ```

The application will be available at `http://localhost:3000`

### Available Endpoints

- `GET /` - Welcome page with API information
- `GET /health` - Health check endpoint
- `GET /api` - Example API endpoint

## Production Deployment

### AWS Deployment

```bash
# Build the Docker image
docker build -t nodejs-cloud-app .

# Push to Amazon ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.<region>.amazonaws.com
docker tag nodejs-cloud-app:latest <aws-account-id>.dkr.ecr.<region>.amazonaws.com/nodejs-cloud-app:latest
docker push <aws-account-id>.dkr.ecr.<region>.amazonaws.com/nodejs-cloud-app:latest
```

### GCP Deployment

```bash
# Build the Docker image
docker build -t nodejs-cloud-app .

# Push to Google Container Registry
docker tag nodejs-cloud-app gcr.io/<project-id>/nodejs-cloud-app
docker push gcr.io/<project-id>/nodejs-cloud-app
```

## Project Structure

```
.
├── app.js              # Main application entry point
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
├── .dockerignore       # Docker ignore file
└── .gitignore         # Git ignore file
```

## Environment Variables

Copy `.env.example` to `.env` and adjust the values:

- `PORT` - Application port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Security

This application includes several security features:
- Helmet.js for HTTP headers
- CORS protection
- Running as non-root user in Docker
- Environment variable management
- Compression for responses

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
