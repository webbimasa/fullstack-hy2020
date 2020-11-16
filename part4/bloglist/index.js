const app = require('./app')
const http = require('http')
const config = require('./utils/config.js')
const logger = require('./utils/logger')

const server = http.createServer(app)

logger.info('hello world')

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})