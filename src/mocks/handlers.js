// src/mocks/handlers.js
import { rest } from 'msw';
import startups from './startups.json';

    
export const handlers = [
    
  rest.get('http://localhost:3000/api/startups', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        startups
      ),
    );
  }),
    rest.get('*', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ error: '' }),
      );
    }),
];