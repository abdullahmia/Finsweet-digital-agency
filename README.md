# Digital Agency Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern and responsive digital agency website built with ReactJS, TailwindCSS, Redux Toolkit, RTK-Query, and Socket.io.

## Preview

Check out the live demo [here](https://finsweet-digital-agency.netlify.app/).

## Features

-   Responsive design
-   About us section
-   Services and pricing
-   Checkout the services with Sslcommerz payment gateway
-   Articles with comments
-   Contact Message
-   Real-time order notification with Socket.io
-   Role based authentication with JWT & Access Control

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js and npm installed on your machine

### Installation

1. Clone the repo

```sh
git clone git@github.com:abdullahmia/Finsweet-digital-agency.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a `.env` file in the root directory and add api url

```sh
REACT_APP_API_URL= [your api url]
REACT_APP_CLOUDINARY_IMAGE_URL= [your cloudinary image url]
REACT_APP_SERVER_URL= [your api url]
```

<!-- start the server -->

4. Start the server

```sh
npm run server
```

5. Open your browser and navigate to `http://localhost:3000`.

## Built With

-   [ReactJS](https://reactjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [RTK-Query](https://rtk-query.js.org/)
-   [Socket.io](https://socket.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
