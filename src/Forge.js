import Servers from './core/Servers';
import User from './core/User';

class Forge {
  constructor(token) {
    this.token = token;
    this.user = new User(token);
    this.servers = new Servers(token);
  }
}

export default Forge;
