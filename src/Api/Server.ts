export class Server {
  public _app
  constructor({ app }) {
    this._app = app
  }
  async start() {
    await this._app.start()
  }
}
