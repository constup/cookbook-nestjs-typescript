import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('environment-variables')
export class EnvironmentVariablesController {
    constructor(private configService: ConfigService) {}

  /**
   * This example shows how to fetch all (OS/shell + .env) environment variables using pure NodeJS.
   * It also shows how to fetch all environment variables, if you need to iterate through them for some reason.
   */
  @Get()
    fetchAllEnvironmentVariables(): string {
        let text: string;

        // This will return all environment variables, both from OS/shell and .env file
        text = `All OS/shell environment variables: <pre>${JSON.stringify(
            process.env,
            undefined,
            2,
        )}</pre><br>`;

        text += `Individual environment variable accessed by <b>NodeJS</b>. NVM_DIR variable value: ${process.env.NVM_DIR}<br>`;

        // Note: See env-files-controller for more details.
        text += `Individual environment variable accessed by <b>NestJS</b>. NVM_DIR variable value: ${this.configService.get(
            'NVM_DIR',
        )}`;

        return text;
    }
}
