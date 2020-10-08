import { controller, Get, render, TokenRequired } from '@foal/core';
import { TypeORMStore } from '@foal/typeorm';

import { ApiController, AuthController } from './controllers';

export class AppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/auth', AuthController),
  ];

  @Get('/')
  @TokenRequired({
    // The session token is expected to be in a cookie.
    cookie: true,
    // Redirect the user to /signin if user is not logged in.
    redirectTo: '/signin',
    // Specify the "store" where the session was created.
    store: TypeORMStore,
  })
  index() {
    return render('templates/index.html');
  }

  @Get('/signin')
  signin() {
    return render('templates/signin.html');
  }

  @Get('/signup')
  signup() {
    return render('templates/signup.html');
  }
}
