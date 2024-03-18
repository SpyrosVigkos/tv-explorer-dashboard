# TV Explorer Dashboard

## Introduction

TV Explorer Dashboard is a Vue.js application that leverages the TVmaze API to showcase popular TV shows filtered by genres. The application allows users to browse shows, view details for a specific show, and search for shows by name. This project demonstrates clean, reusable code and follows frontend best practices.

## Features

- Display TV shows in horizontally scrollable lists categorized by genre.
- Show details page for each TV show.
- Search functionality for finding specific TV shows.
- Add to Watchlist Functionallity
- Responsive and mobile-friendly design.
- Simple yet eye-catching UI.

## Getting Started

### Prerequisites

- Node.js (version used during development: `v20.11.1`)
- Yarn (version used during development: `1.22.22`)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/SpyrosVigkos/tv-explorer-dashboard.git
   ```
2. Navigate to the cloned repository
   ```
   cd tv-explorer-dashboard
   ```
3. Install the dependencies using Yarn:
   ```
   yarn install
   ```

### Running the Application

To start the development server, run:

```
yarn dev
```

The application will be available at the default Vite port or a randomly assigned available port. Check your terminal for the local server address.

### Building for Production

To build the app for production, run:

```
yarn build
```

The build artifacts will be stored in the dist/ directory.

### Previewing the Production Build

To preview the production build, run:

```
yarn test
```

For test watching, run:

```
yarn test:watch
```

## Technologies Used

- Vue.js 3
- Vue Router for routing
- Axios for promise-based HTTP requests
- Tailwind CSS for styling
- Vite as a build tool and development server
- Vitest for unit testing
- TypeScript for static type checking

## Architectural Decisions

The application is structured with maintainability and scalability in mind. Vue.js was chosen for its reactive data binding and component-based architecture. Vue Router manages navigation, and Axios handles network requests efficiently. The UI is crafted with Tailwind CSS for rapid development and a customizable design system. TypeScript is utilized to enhance code quality and developer experience.

Yarn was chosen over npm as the package manager because of its reliable caching, consistent `node_modules` structure, and superior dependency resolution algorithms. These features of Yarn contribute to faster install times and less potential for errors.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Spyros Vigkos - [spiros.vigos@gmail.com](mailto:spiros.vigos@gmail.com)

Project Link: [https://github.com/SpyrosVigkos/tv-explorer-dashboard](https://github.com/SpyrosVigkos/tv-explorer-dashboard)
