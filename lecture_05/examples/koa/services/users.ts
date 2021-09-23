import * as uuid from 'uuid';
import * as _ from 'lodash';

class UserService {
  private USERS: {
    id: string;
    token: string;
  }[] = [];

  create() {
    const user = {
      id: `${this.USERS.length}`,
      token: uuid.v4(),
    };

    this.USERS.push(user);

    return user;
  }

  find() {
    return this.USERS.map((user) => ({
      id: user.id,
    }));
  }

  findById(id: string) {
    return _.find(this.USERS, (user) => user.id === id) || null;
  }

  findByToken(token: string) {
    return _.find(this.USERS, (user) => user.token === token) || null;
  }
}

export const userService = new UserService();
