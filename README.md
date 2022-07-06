# Density Labs Technical Interview: Comment Section

This project simulates the basic functionalities of a comment section, allowing users to create, edit and delete comments. All created comments are displayed below the comment box section.

Using React for the frontend components and Redux as its main state management library, NodeJS for the backend functionalities (specifically Express as its web framework) and MySQL for the database structure.

For a quick development, `create-react-app` and `express-generator` tools were used for creating this project.

## Technical Requirements

This project was developed with the following versions for each technology:

- Node JS: 14.15.4
- NPM: 8.10.0
- MySQL: 8.0.29

## Steps to run this project locally

1. Download the included `comment.sql` file and import the table in a new database using the MySQL client of your choice. For this project purpose, the chosen database name was `density`.
2. Set the proper credentials `user` and `password` in `database.js` file on this project to ensure the server is granted access to the database.
3. Install all required dependencies for the backend using the basic node command: `npm install` in the root directory.

   The default port used for this project is `:4200`. If you need to make any changes, feel free to modify `/bin/www` file with the port of your choice. Also, you will need to modify `/client/package.json` file in the 'proxy' parameter with your chosen port.

4. You can now start the server using `npm start` command. Please be aware that `nodemon` library was used in this development.
5. Using another tab of your terminal, navigate to the `/client` directory and install all required dependecies using the same `npm install` command.
6. Once this process is completed you may now run the frontend app using `npm start`.
