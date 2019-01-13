import Servers from './core/Servers';
import Services from './core/Services';
import User from './core/User';
import Daemons from './core/Daemons';
import FirewallRules from './core/FirewallRules';
import Jobs from './core/Jobs';
import Php from './core/Php';
import Database from './core/Database';
import DatabaseUsers from './core/DatabaseUsers';
import Sites from './core/Sites';
import Ssl from './core/Ssl';
import Ssh from './core/Ssh';

class Forge {
  constructor(token) {
    this.token = token;
    this.user = new User(token);
    this.servers = new Servers(token);
    this.services = new Services(token);
    this.daemons = new Daemons(token);
    this.firewallRules = new FirewallRules(token);
    this.jobs = new Jobs(token);
    this.php = new Php(token);
    this.database = new Database(token);
    this.databaseUsers = new DatabaseUsers(token);
    this.sites = new Sites(token);
    this.ssl = new Ssl(token);
    this.ssh = new Ssh(token);
  }
}

export default Forge;
