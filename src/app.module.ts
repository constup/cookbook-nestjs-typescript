import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleBaseController } from './nestjs/controllers-and-commands/controllers/sample-base/sample-base.controller';
import { EnvFilesControllerController } from './nestjs/getting-data/configuration/environment-variables/env-files-controller/env-files-controller.controller';
import { EnvironmentVariablesController } from './nestjs/getting-data/configuration/environment-variables/environment-variables/environment-variables.controller';
import { IncomingHttpHeaders } from 'http';
import { FetchRequestHeadersController } from './nestjs/requests/incoming/http-headers/fetch-request-headers/fetch-request-headers.controller';
import { MixPostGetPayloadsController } from './nestjs/requests/incoming/read-request-payload/mix-post-get-payloads/mix-post-get-payloads.controller';
import { PostPayloadController } from './nestjs/requests/incoming/read-request-payload/post-payload/post-payload.controller';
import { UrlParametersController } from './nestjs/requests/incoming/read-request-payload/url-parameters/url-parameters.controller';
import { HttpModule } from '@nestjs/axios';
import { ScalarPropertiesDefaultValuesControllerController } from './nestjs/framework-constructs/providers/scalar-properties-default-values/scalar-properties-default-values-controller/scalar-properties-default-values-controller.controller';
import { ScalarPropertiesDefaultValuesProvider } from './nestjs/framework-constructs/providers/scalar-properties-default-values/scalar-properties-default-values-provider';
import { ScalarPropertiesNoDefault } from './nestjs/framework-constructs/providers/scalar-properties-no-default/scalar-properties-no-default';
import { ScalarPropertiesNoDefaultControllerController } from './nestjs/framework-constructs/providers/scalar-properties-no-default/scalar-properties-no-default-controller/scalar-properties-no-default-controller.controller';
import { NonInjectableClassAsProviderController } from './nestjs/framework-constructs/providers/non-injectable-classes-as-properties/non-injectable-class-as-provider/non-injectable-class-as-provider.controller';
import { NonInjectableClassAsProvider } from './nestjs/framework-constructs/providers/non-injectable-classes-as-properties/non-injectable-class-as-provider';
import { InterfacesAsPropertiesController } from './nestjs/framework-constructs/providers/interfaces-as-properties/interfaces-as-properties/interfaces-as-properties.controller';
import { InterfacesAsProperties } from './nestjs/framework-constructs/providers/interfaces-as-properties/interfaces-as-properties';
import { ProviderAsProperty } from './nestjs/framework-constructs/providers/other-providers-as-properties/provider-as-property';
import { ProviderWithProviderProperties } from './nestjs/framework-constructs/providers/other-providers-as-properties/provider-with-provider-properties';
import { OtherProvidersAsPropertiesController } from './nestjs/framework-constructs/providers/other-providers-as-properties/other-providers-as-properties/other-providers-as-properties.controller';
import { MakeGetRequestController } from './nestjs/requests/outgoing/make-get-request/make-get-request/make-get-request.controller';
import { ReturnJsonPayloadController } from './nestjs/responses/simple-json-response/return-json-payload/return-json-payload.controller';
import { MakePostRequestController } from './nestjs/requests/outgoing/make-get-request/make-post-request/make-post-request/make-post-request.controller';
import { ImmutableObjectsController } from './typescript/classes-and-objects/immutable-objects/immutable-objects.controller';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [
    AppController,
    SampleBaseController,
    EnvFilesControllerController,
    EnvironmentVariablesController,
    FetchRequestHeadersController,
    MixPostGetPayloadsController,
    PostPayloadController,
    UrlParametersController,
    ScalarPropertiesDefaultValuesControllerController,
    ScalarPropertiesNoDefaultControllerController,
    NonInjectableClassAsProviderController,
    InterfacesAsPropertiesController,
    OtherProvidersAsPropertiesController,
    MakeGetRequestController,
    ReturnJsonPayloadController,
    MakePostRequestController,
    ImmutableObjectsController,
  ],
  providers: [
    AppService,
    ScalarPropertiesDefaultValuesProvider,
    ScalarPropertiesNoDefault,
    NonInjectableClassAsProvider,
    InterfacesAsProperties,
    ProviderAsProperty,
    ProviderWithProviderProperties,
  ],
})
export class AppModule {}
