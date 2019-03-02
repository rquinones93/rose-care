# rose-care

Rose Care is a Social Network centered around Caregiver Organization and Support for the loved ones they care for. It was made for SF Hacks 2019.

## Dependencies

1. Node.js

   - [Download on Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows)
   - [Download on Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
   - [Download on Linux](https://blog.teamtreehouse.com/install-node-js-npm-linux)

2. Make sure npm is installed.

   ```bash
   npm install
   ```

3. PostgreSQL - [Install PostgreSQL (all OS)](https://www.postgresql.org/download/)

4. PostgrSQL Clients (Choose One)
   - All OS - [pgAdmin](https://www.pgadmin.org/download/)
   - Mac - [Postico](https://eggerapps.at/postico/)

## Initial Setup of Local PostgreSQL Database

### Important: Make sure you've cloned the project & PostgreSQL Server is running before proceeding

- [Windows - Using pgAdmin - Video Tutorial](https://youtu.be/EBw5E5DzAvE?t=185)
  - Note: Create a new database called `gator_trade`. You should be finished by 5:00 in the video.
- Mac & Linux - Open your Terminal, type the following commands.

  ```bash
  # Make sure psql is already installed
  # psql Create Database Command
  createdb rose_care
  ```

- All Operating Systems

  - Open the project in an editor and from the base of the directory, create a file named `.env`.
  - Within `.env` paste the following `DATABASE_URL=postgres://whoami@localhost:5432/gator_trade`.
    - Note: `whoami` is the output of the Unix `whoami` command.
    - Note: If you created a username & password from the Windows tutorial, substitute `username:password` for `whoami`.
  - Save `.env`.
    - This environment file will be referenced both in the local project and by Heroku. This file will hold unique, secret values that should not be shared. The `.gitignore` file stops the `.env` file from being pushed to GitHub.

### Setup will be completed in next section

## How to run the project

1. Clone the repository to your local machine.
2. Setup local PostgreSQL database (see previous section.)
3. Open your Terminal or Git Bash, from the project's directory, and type the following commands.

   ```bash
   # This installs node modules defined in package.json
   npm install

   # Run Sequelize Migrations to finish database setup - creates tables
   npm run db:migrate

   # Seed the Database with dummy data provided in the seeders directory
   npm run db:seed:all

   # Start the server and application
   npm run start:windev  # On Windows
   # Or
   npm run start:dev     # On Mac or Linux
   ```

4. Once the server is running, visit `localhost:3000` from your browser.

## Rules for Branching

In order to have a consistent flow with developer branches we need to implement a naming convention on new branches, as well as a step by step approach to merging and pull requests.

### Branch Naming Convention

```bash
developerName-featureName
```