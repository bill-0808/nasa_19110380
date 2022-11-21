const http = require('http');

const app = require('./app');
const db = require('../data/connection')
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    await db.connectDB();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    })
}

startServer();