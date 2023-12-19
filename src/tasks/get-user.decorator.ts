import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/auth/user.entity';

export const GetUser = createParamDecorator(
  // underscored pada data digunakan untuk memperbaiki error lint karena unused variable
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
