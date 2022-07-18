import { Controller, Post, Body, Query } from '@nestjs/common';

@Controller('mix-post-get-payloads')
export class MixPostGetPayloadsController {
    /**
     * How to fetch both URL parameters and POST request JSON payload.
     * Note: This is only a sample which shows how to mix getting URL parameters and POST payload at the same time. For
     * more details about URL parameters and POST payloads, take a look at their respective examples.
     *
     * @param query
     * @param postPayload
     */
    @Post()
    getBothPostAndGet(@Query() query, @Body() postPayload): string {
        let text: string;

        // URL parameters are fetched from query function property by using the @Query decorator.
        text = `URL parameters: <pre>${JSON.stringify(query)}</pre><br>`;

        // POST payload is fetched from postPayload function property by using the @Body decorator.
        text += `POST payload data: <pre>${JSON.stringify(postPayload)}</pre>`;

        return text;
    }
}
