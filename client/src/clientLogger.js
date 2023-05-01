// clientLogger.js

const log = (level, message) => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
  
    switch (level) {
      case 'info':
        console.info(message);
        break;
      case 'error':
        console.error(message);
        break;
      case 'warn':
        console.warn(message);
        break;
      case 'debug':
      default:
        console.debug(message);
        break;
    }
  };
  
  module.exports = {
    info: (message) => log('info', message),
    error: (message) => log('error', message),
    warn: (message) => log('warn', message),
    debug: (message) => log('debug', message),
  };
  