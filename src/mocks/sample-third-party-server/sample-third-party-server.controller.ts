import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Controller('sample-third-party-server')
export class SampleThirdPartyServerController {
  /**
   * You can use this sample endpoint to make authentication requests.
   *
   * This endpoint expects the following payload:
   *  {
   *    "auth": {
   *      "username": "admin",
   *      "password": "admin"
   *    }
   *  }
   *
   * Valid combination of username/password is: admin/admin.
   * You can also try sending an invalid payload (for example: without "auth" object), or wrong username/password in
   * order to trigger different types of error responses.
   */
  @Post('authenticate')
  authenticate(@Body() postPayloadData, @Res() response): void {
    const validUsernamePassword = {
      username: 'admin',
      password: 'admin',
    };
    console.log('You have sent the following payload to the mock server: ');
    console.log(JSON.stringify(postPayloadData, undefined, 4));
    const auth = postPayloadData.auth;
    if (
      typeof postPayloadData === 'undefined' ||
      !postPayloadData.hasOwnProperty('auth') ||
      typeof postPayloadData.auth === 'undefined'
    ) {
      const result = {
        status: 'ERROR',
        message: 'Missing authentication header.',
      };
      response.status(HttpStatus.BAD_REQUEST).send(result);

      return;
    }
    const username = auth.username;
    const password = auth.password;

    if (
      username === validUsernamePassword.username &&
      password === validUsernamePassword.password
    ) {
      const uuidString = uuidv4();
      const result = {
        status: 'OK',
        token: uuidString,
      };

      response.status(HttpStatus.OK).send(result);
    } else {
      const result = {
        status: 'ERROR',
        message: 'Wrong username and password',
      };

      response.status(HttpStatus.UNAUTHORIZED).send(result);
    }
  }
}
