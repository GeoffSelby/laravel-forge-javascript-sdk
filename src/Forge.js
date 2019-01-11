import Servers from './core/Servers';

class Forge {
  constructor(token) {
    this.token = token;
    this.servers = new Servers(token);
  }
}

export default Forge;
