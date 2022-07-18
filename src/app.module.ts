import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleBaseController} from "./nestjs/controllers-and-commands/controllers/sample-base/sample-base.controller";
import { EnvFilesControllerController } from "./nestjs/getting-data/configuration/environment-variables/env-files-controller/env-files-controller.controller";
import { EnvironmentVariablesController } from "./nestjs/getting-data/configuration/environment-variables/environment-variables/environment-variables.controller";
import { IncomingHttpHeaders } from "http";
import { FetchRequestHeadersController } from "./nestjs/requests/incoming/http-headers/fetch-request-headers/fetch-request-headers.controller";
import { MixPostGetPayloadsController } from "./nestjs/requests/incoming/read-request-payload/mix-post-get-payloads/mix-post-get-payloads.controller";
import { PostPayloadController} from "./nestjs/requests/incoming/read-request-payload/post-payload/post-payload.controller";
import { UrlParametersController } from "./nestjs/requests/incoming/read-request-payload/url-parameters/url-parameters.controller";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    SampleBaseController,
    EnvFilesControllerController,
    EnvironmentVariablesController,
    FetchRequestHeadersController,
    MixPostGetPayloadsController,
    PostPayloadController,
    UrlParametersController
  ],
  providers: [AppService],
})
export class AppModule {}
