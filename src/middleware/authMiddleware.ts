// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Implement admin authentication logic here
};

export const studentAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Implement student authentication logic here
};
