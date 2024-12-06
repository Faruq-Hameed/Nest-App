import { ForbiddenException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';


export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Request...`);
    next();
};


export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('request made to ' + req.path)
        next()
    }
}

export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers
        if (!authorization) {
            throw new ForbiddenException({ message: 'Authorization is required', data: null })
        }
        if (authorization !== 'auth001') {
            throw new ForbiddenException({ message: 'Invalid authorization token', data: null })
        }
        console.log({ authorization })
        next()
    }
}