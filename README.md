# 2ndBrain Project

Welcome to the 2ndBrain project! This project is aimed at creating a responsive web application for organizing and managing your personal knowledge repository, inspired by the concept of a "Second Brain."

## Features

* **Responsive Design:** The application is designed to work seamlessly across various devices and screen sizes, ensuring a consistent experience for users.
* **Light & Dark Mode:** Users can choose between light and dark modes based on their preference, providing a personalized viewing experience.
* **Technologies Used:**
	* **Next.js**: Utilized for building a React-based web application with server-side rendering and routing capabilities.
	* **SWR:** Integrated SWR (stale-while-revalidate) for efficient data fetching and caching, enhancing application performance.
	* **OAuth using NextAuth.js:** Implemented OAuth authentication using NextAuth.js, making it easy to authenticate users via various providers.
	<!-- * **Node.js & Express.js:** Backend server built using Node.js and Express.js, facilitating API development and server-side logic. -->
	* **Node.js:** Backend server built using Node.js, facilitating API development and server-side logic.
	* **MongoDB & MongoDB Atlas:** Leveraged MongoDB as the database system, with MongoDB Atlas for cloud-hosted database management.
	* **Prisma**: ORM (Object-Relational Mapping) tool used for simplifying database interactions and managing data models.
	* **Firebase**: Integrated Firebase services for authentication, real-time database, and cloud storage functionality.
	* **Google Cloud Platform**: Utilized Google Cloud Platform for additional cloud-based services and infrastructure.
	* **Docker:** Containerization platform used for packaging the application and its dependencies into standardized units called containers, ensuring consistency across different environments and simplifying deployment processes.

## Getting Started

To get started with the 2ndBrain project, follow these steps:

* Clone the repository to your local machine:
	```bash
	git clone https://github.com/JanBurdzicki/2ndBrain.git
	```
* Move to project directory:
	```bash
	cd 2ndBrain
	```

* Install dependencies:
	```bash
	npm install
	# or
	yarn install
	# or
	pnpm install
	```
* Set up environment variables:
	* Copy the `.env.template` file to `.env` and configure environment variables such as database connection strings, authentication providers, etc.
* Run the development server:
	```bash
	npm run dev
	# or
	yarn dev
	# or
	pnpm dev
	```

Open your browser and navigate to http://localhost:3000 to view the application.

<!-- This project uses [next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font. -->

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
