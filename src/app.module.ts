import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleBaseController } from './nestjs/version-9/controllers-and-commands/controllers/sample-base/sample-base.controller';
import { EnvFilesControllerController } from './nestjs/version-9/getting-data/configuration/environment-variables/env-files-controller/env-files-controller.controller';
import { EnvironmentVariablesController } from './nestjs/version-9/getting-data/configuration/environment-variables/environment-variables/environment-variables.controller';
import { IncomingHttpHeaders } from 'http';
import { FetchRequestHeadersController } from './nestjs/version-9/http/http-requests/incoming/http-headers/fetch-request-headers/fetch-request-headers.controller';
import { MixPostGetPayloadsController } from './nestjs/version-9/http/http-requests/incoming/read-request-payload/mix-post-get-payloads/mix-post-get-payloads.controller';
import { PostPayloadController } from './nestjs/version-9/http/http-requests/incoming/read-request-payload/post-payload/post-payload.controller';
import { UrlParametersController } from './nestjs/version-9/http/http-requests/incoming/read-request-payload/url-parameters/url-parameters.controller';
import { HttpModule } from '@nestjs/axios';
import { ScalarPropertiesDefaultValuesControllerController } from './nestjs/version-9/framework-constructs/providers/scalar-properties-default-values/scalar-properties-default-values-controller/scalar-properties-default-values-controller.controller';
import { ScalarPropertiesDefaultValuesProvider } from './nestjs/version-9/framework-constructs/providers/scalar-properties-default-values/scalar-properties-default-values-provider';
import { ScalarPropertiesNoDefault } from './nestjs/version-9/framework-constructs/providers/scalar-properties-no-default/scalar-properties-no-default';
import { ScalarPropertiesNoDefaultControllerController } from './nestjs/version-9/framework-constructs/providers/scalar-properties-no-default/scalar-properties-no-default-controller/scalar-properties-no-default-controller.controller';
import { NonInjectableClassAsProviderController } from './nestjs/version-9/framework-constructs/providers/non-injectable-classes-as-properties/non-injectable-class-as-provider/non-injectable-class-as-provider.controller';
import { NonInjectableClassAsProvider } from './nestjs/version-9/framework-constructs/providers/non-injectable-classes-as-properties/non-injectable-class-as-provider';
import { InterfacesAsPropertiesController } from './nestjs/version-9/framework-constructs/providers/interfaces-as-properties/interfaces-as-properties/interfaces-as-properties.controller';
import { InterfacesAsProperties } from './nestjs/version-9/framework-constructs/providers/interfaces-as-properties/interfaces-as-properties';
import { ProviderAsProperty } from './nestjs/version-9/framework-constructs/providers/other-providers-as-properties/provider-as-property';
import { ProviderWithProviderProperties } from './nestjs/version-9/framework-constructs/providers/other-providers-as-properties/provider-with-provider-properties';
import { OtherProvidersAsPropertiesController } from './nestjs/version-9/framework-constructs/providers/other-providers-as-properties/other-providers-as-properties/other-providers-as-properties.controller';
import { MakeGetRequestController } from './nestjs/version-9/http/http-requests/outgoing/make-get-request/make-get-request/make-get-request.controller';
import { ReturnJsonPayloadController } from './nestjs/version-9/http/http-responses/simple-json-response/return-json-payload/return-json-payload.controller';
import { MakePostRequestController } from './nestjs/version-9/http/http-requests/outgoing/make-post-request/make-post-request/make-post-request.controller';
import { ImmutableObjectsController } from './typescript/classes-and-objects/immutable-objects/immutable-objects.controller';
import { SimplePromiseReturningStringController } from './typescript/promises/creation-and-basic-use/01-simple-promise-returning-string/simple-promise-returning-string.controller';
import { PromiseReturningSimpleDataObjectController } from './typescript/promises/creation-and-basic-use/02-promise-returning-simple-data-object/promise-returning-simple-data-object.controller';
import { PromiseReturningDifferentTypesController } from './typescript/promises/creation-and-basic-use/03-promise-returning-different-types/promise-returning-different-types.controller';
import { PromiseReturningFunctionController } from './typescript/promises/creation-and-basic-use/04-promise-returning-function/promise-returning-function.controller';
import { PromiseReturningOtherPromiseController } from './typescript/promises/creation-and-basic-use/05-promise-returning-other-promise/promise-returning-other-promise.controller';
import { SimpleUseOfThenController } from './typescript/promises/then-catch-finally/simple-use-of-then/simple-use-of-then.controller';

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
    SimplePromiseReturningStringController,
    PromiseReturningSimpleDataObjectController,
    PromiseReturningDifferentTypesController,
    PromiseReturningFunctionController,
    PromiseReturningOtherPromiseController,
    SimpleUseOfThenController,
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
