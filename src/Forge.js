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
import Workers from './core/Workers';
import Redirect from './core/Redirect';
import Deployment from './core/Deployment';
import Config from './core/Config';
import Git from './core/Git';
import Wordpress from './core/Wordpress';
import Webhooks from './core/Webhooks';
import Recipes from './core/Recipes';
import Regions from './core/Regions';

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
    this.workers = new Workers(token);
    this.redirect = new Redirect(token);
    this.deployment = new Deployment(token);
    this.config = new Config(token);
    this.git = new Git(token);
    this.wordpress = new Wordpress(token);
    this.webhooks = new Webhooks(token);
    this.recipes = new Recipes(token);
    this.regions = new Regions(token);
  }
}

export default Forge;
