import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';

@Injectable()
export class GoogleService {
  constructor(private usersRepository: UsersRepository) {}

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const fn = req.user.firstName;
    try {
      this.usersRepository.createUser({
        username: fn,
        password: 'password1234',
      });

      return {
        message: 'User information from google',
        user: req.user,
      };
    } catch (error) {
      return error;
    }
  }
}
