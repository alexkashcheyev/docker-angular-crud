# Running the project

1. Install [Docker Compose](https://docs.docker.com/compose/install/)
1. Install [NodeJS](https://nodejs.org/en/download/)
1. Install Yarn: `npm i -g yarn`
1. `cd` to the project directory
1. Run `yarn dev`
1. It will take some time
1. In Docker output, find lines looking like this:
```
guitars-client_1       | [Browsersync] Access URLs:
guitars-client_1       |  -----------------------------------
guitars-client_1       |        Local: http://localhost:3000
guitars-client_1       |     External: http://172.29.0.3:3000
guitars-client_1       |  -----------------------------------
guitars-client_1       |           UI: http://localhost:3001
guitars-client_1       |  UI External: http://localhost:3001
guitars-client_1       |  -----------------------------------
```
Then open the link marked as `External` in your browser.