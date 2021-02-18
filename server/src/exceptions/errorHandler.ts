import { Request, Response, NextFunction } from 'express';
import HttpException from './httpException';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status);
    res.send({ status: error.status, message: error.message });
};

export default errorHandler;
