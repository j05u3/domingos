export class Controller {
  startGame(req, res) {
    // TODO: write logic
    res.json({'status': 'Not implemented yet'});
  }

  movement(req, res) {
    // TODO: write logic
    res.json({'status': 'Not implemented yet', 'data sent' : req.body});
  }
}
export default new Controller();
