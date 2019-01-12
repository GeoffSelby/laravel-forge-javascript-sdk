import Servers from './core/Servers';
import Services from './core/Services';
import User from './core/User';

class Forge {
  constructor(token) {
    this.token = token;
    this.user = new User(token);
    this.servers = new Servers(token);
    this.services = new Services(token);
  }
}

export default Forge;
