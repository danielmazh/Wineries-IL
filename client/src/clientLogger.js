// clientLogger.js

// const log = (level, message) => {
//     if (process.env.NODE_ENV === 'production') {
//       return;
//     }
  
//     switch (level) {
//       case 'info':
//         console.info(message);
//         break;
//       case 'error':
//         console.error(message);
//         break;
//       case 'warn':
//         console.warn(message);
//         break;
//       case 'debug':
//       default:
//         console.debug(message);
//         break;
//     }
//   };
  
//   module.exports = {
//     info: (message) => log('info', message),
//     error: (message) => log('error', message),
//     warn: (message) => log('warn', message),
//     debug: (message) => log('debug', message),
//   };
  




// clientLogger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug', // Set the log level here; for more details, use 'debug', for fewer, use 'info', 'warn', or 'error'
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;