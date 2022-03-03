# Full stack application - BRAINHUB TASK

### live preview

https://ister.pl

## Used Technolochy:

1. Nodejs

2. MongoDb

3. React + Redux

## Prerequests

1. Nodejs ^14

2. MongoDb ^4.4.8

## Clone repository - Inside your terminal type commands below:

1. Clone repozitory and open it:

- git clone https://github.com/jdsk88/brainhub-task && cd 2021

## Install all dependencies using shell script:

### mac osx

1. Add permisions (from root directory):

- chmod +x install.sh

2. Install

- sh install.sh

### linux

1. Add permisions (from root directory):

- chmod +x install.sh

2. Install

- sudo ./install.sh

### windows

1. Add permisions

- read --> https://www.thewindowsclub.com/how-to-run-sh-or-shell-script-file-in-windows-10

2. Install

- ./install

## Or install step by step

1. Backend dev server (from root directory):

- npm i

2. Frontend dev server (from root directory):

- cd frontend && npm i

## Start deploy version of the application

1. Make build of frontend:

- cd frontend

- npm run build

2. Back to root directiory and run to server:

- cd ../

- npm start

- open browser at http://localhost:8888

## Start development version of the application

1. Backend dev server:

- npm start

  1.1. or run by nodemon:

- npm run watch

2. Frontend dev server:

- cd frontend && npm start

3. Both sides using concurrently package (from root directory):

- npm run app

### frontend starts at http://localhost:3000

## Test (backend only)

1. Backend dev server (from root directory):

- npm test

## links

### Coded By https://ister.pl
