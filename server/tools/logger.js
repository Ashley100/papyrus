import winston, {format} from "winston";

let { combine, timestamp, label, printf  } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs.log' }),
    ],
});