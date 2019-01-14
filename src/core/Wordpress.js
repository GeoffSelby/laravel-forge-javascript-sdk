import ForgeRequest from './ForgeRequest';

class Wordpress extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }
}

export default Wordpress;
