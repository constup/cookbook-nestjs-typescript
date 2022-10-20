import { Controller, Get, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('env-files-controller')
export class EnvFilesControllerController {
    constructor(private configService: ConfigService) {}

  /**
   * There are a couple of preparation steps before you can start using .env files in NestJs:
   *
   * - This example uses @nestjs/config module to fetch values from .env files. Use npm to install it;
   * - In app.modules.ts:
   *      - import @nestjs/config
   *      - add ConfigModule.forRoot() to @Module import. More options are available for forRoot() function. See official documentation.
   * - Add ConfigService (@nestjs/config) private property to your controller's constructor.
   *
   * Usage documentation available at https://docs.nestjs.com/techniques/configuration#using-the-configservice
   * Full configuration documentation is available at https://docs.nestjs.com/techniques/configuration
   */
  @Get('fetch-environment-variable')
    fetchEnvironmentVariable(): string {
        let text: string;

        // Fetching an existing environment variable from .env file
        text = `TEST_ENV_VALUE stored in .env file: ${this.configService.get('TEST_ENV_VALUE')}<br>`;

        // Fetching a non-existing environment variable. It should return "undefined"
        text += `Non-existing variable return: ${this.configService.get('NON_EXISTING_VARIABLE')}<br>`;

        // Fetching a global environment variable (defined on OS/shell level)
        text += `Global environment variable (NVM_DIR): ${this.configService.get('NVM_DIR')}`;

        return text;
    }
}
