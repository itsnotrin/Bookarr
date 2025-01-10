# Bookarr

Bookarr is a web application built to be part of the *arr suite (Sonarr, Radarr, Lidarr, etc.), following their exact styling and functionality. Built with Next.js, PostCSS, and Tailwind CSS.

## Features

- Modern Next.js 14+ with App Router
- Tailwind CSS for styling
- Full authentication system
- Responsive UI matching *arr suite design
- Dark/Light theme support
- Calendar view
- Activity feeds
- Library management
- Import/Export settings
- System status and health checks

## Requirements

- Node.js 18.17 or later
- PostgreSQL 12 or later
- Docker and Docker Compose (for development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/itsnotrin/bookarr.git
```

2. Install dependencies:
```bash
npm install
```

3. Copy the example environment file:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`

## Development

The application follows the *arr suite's architecture and design patterns. Key directories:

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/lib` - Utility functions and shared logic
- `/styles` - Global styles and Tailwind configuration
- `/prisma` - Database schema and migrations
- `/api` - API routes and handlers

### Development with Docker

For development and testing purposes, you can use the provided Docker setup:

```bash
./scripts/docker-rebuild.sh
```

⚠️ **Important Note**: The `docker-rebuild.sh` script is intended for development and testing only. It:
- Stops all running containers
- Removes existing volumes and data
- Rebuilds the application from scratch
- Creates a fresh database

**DO NOT use this script in production** as it will delete all your data. For production deployment, use proper deployment procedures with data persistence and backup strategies.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

Thank you to all the contributors who have helped make this project possible!
See [Contributors](https://github.com/itsnotrin/bookarr/graphs/contributors) for a list of all contributors to this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
