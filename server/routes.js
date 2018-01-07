import chessGameRouter from './api/controllers/chessgame/router';

export default function routes(app) {
  app.use('/api/v1', chessGameRouter);
}
