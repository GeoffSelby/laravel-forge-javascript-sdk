import Servers from './core/Servers';
import Services from './core/Services';
import User from './core/User';
import Daemons from './core/Daemons';

class Forge {
  constructor(token) {
    this.token = token;
    this.user = new User(token);
    this.servers = new Servers(token);
    this.services = new Services(token);
    this.daemons = new Daemons(token);
  }
}

export default Forge;
