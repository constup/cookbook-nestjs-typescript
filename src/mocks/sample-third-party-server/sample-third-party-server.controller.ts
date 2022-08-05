import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Headers,
} from '@nestjs/common';
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
    console.log(`You have sent the following payload to the mock server's "authenticate" endpoint: `);
    console.log(JSON.stringify(postPayloadData, undefined, 4));
    console.log('----------');
    const auth = postPayloadData.auth;
    if (
      typeof postPayloadData === 'undefined' ||
      !postPayloadData.hasOwnProperty('auth') ||
      typeof postPayloadData.auth === 'undefined'
    ) {
      response.status(HttpStatus.BAD_REQUEST).send({
        status: 'ERROR',
        message: 'Missing authentication header.',
      });

      // If an error happens, we must `return` in order to stop further code execution. Sending the response with
      // response.send() is not enough.
      return;
    }
    const username = auth.username;
    const password = auth.password;

    if (
      username === validUsernamePassword.username &&
      password === validUsernamePassword.password
    ) {
      response.status(HttpStatus.OK).send({
        status: 'OK',
        token: uuidv4(),
      });

      // If an error happens, we must `return` in order to stop further code execution. Sending the response with
      // response.send() is not enough.
      return;
    } else {
      response.status(HttpStatus.UNAUTHORIZED).send({
        status: 'ERROR',
        message: 'Wrong username and password',
      });

      return;
    }
  }

  /**
   * This endpoint looks for the Authentication token in received request headers. It returns a sample data payload if
   * the token is present, otherwise it return an error.
   *
   * @param headers
   * @param response
   */
  @Get('post-auth-data-fetch')
  postAuthDataFetch(@Headers() headers, @Res() response): void {
    console.log('Mock server received the following headers in the "post-auth-data-fetch" endpoint:');
    console.log(headers);
    console.log('----------');
    const token = headers.authorization;
    // For this particular example, it doesn't matter whether the token is valid. It's enough that it's there.
    if (!token) {
      response.status(HttpStatus.UNAUTHORIZED).send({
        status: 'ERROR',
        message: 'Unauthorized.',
      });

      // If an error happens, we must `return` in order to stop further code execution. Sending the response with
      // response.send() is not enough.
      return;
    }
    console.log(
      `Authentication token received by "post-auth-data-fetch" mock server endpoint: ${token}
----------`,
    );

    // Send back some sample data payload.
    response.status(HttpStatus.OK).send({
      status: 'OK',
      data: {
        sample_string_field: 'sample string value',
        sample_number_field: 9000,
        sample_boolean_field: false,
        sample_array_field: ['sample array value', 'another array value'],
        sample_object_field: {
          string_object_property: 'string object property value',
        },
      },
    });

    return;
  }
}
