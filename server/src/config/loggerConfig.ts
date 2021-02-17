import winston from 'winston';

const logFormat: winston.Logform.Format = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
        info => `${info.timestamp} - ${info.level}: ${info.message}`,
    ),
);

const logger: winston.Logger = winston.createLogger({
    format: logFormat,
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console());
}

export = logger;
