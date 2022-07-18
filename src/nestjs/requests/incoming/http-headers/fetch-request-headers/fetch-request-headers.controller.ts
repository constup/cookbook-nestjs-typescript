import { Controller, Get, Headers } from '@nestjs/common';

@Controller('fetch-request-headers')
export class FetchRequestHeadersController {
    /*
    Fetch all request headers. Does not include HTTP response code.
     */
    @Get('all-headers')
    fetchAllHeaders(@Headers() headers): string {
        return `All request headers: <pre>${JSON.stringify(headers, undefined, 2)}</pre>`;
    }
}
