import { Controller, Get, Query } from '@nestjs/common';

@Controller('url-parameters')
export class UrlParametersController {
  /**
   * How to fetch parameters from a URL (yourapp.com/?parameter="sdfkj").
   *
   * @param query
   */
  @Get('all-parameters')
    getUrlParameters(@Query() query): string {
    // URL parameters are fetched from query function property by using the @Query decorator.
        return `URL parameters: <pre>${JSON.stringify(query)}</pre>`;
    }

  /**
   * One way to get value of a specific parameter is to access it directly as a property of "query". If the parameter is
   * not preset, "undefined" will be returned.
   *
   * @param query
   */
  @Get('mode-parameter-value')
  getSpecificUrlParameterValue(@Query() query): string {
      return `Mode parameter value: ${query.mode}`;
  }
}
