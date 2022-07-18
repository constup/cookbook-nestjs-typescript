import { Controller, Get, Query } from '@nestjs/common';

@Controller('url-parameters')
export class UrlParametersController {
    /**
     * How to fetch parameters from a URL (yourapp.com/?parameter="sdfkj").
     *
     * @param query
     */
    @Get()
    getUrlParameters(@Query() query): string {
        let text: string;

        // URL parameters are fetched from query function property by using the @Query decorator.
        text = `URL parameters: <pre>${JSON.stringify(query)}</pre>`;

        return text;
    }
}
