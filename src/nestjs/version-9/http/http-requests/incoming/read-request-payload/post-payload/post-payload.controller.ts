import { Controller, Post, Body } from '@nestjs/common';
import { PostPayloadData } from './post-payload.dto';

@Controller('post-payload')
export class PostPayloadController {
  /**
   * An example of using PostPayloadData data transfer object (DTO) to store POST payload data.
   * DTO is defined in the post-payload.dto.ts and imported for use here.
   *
   * @param postPayloadData
   */
  @Post()
  getPostPayload(@Body() postPayloadData: PostPayloadData): string {
    return `POST payload data (stored in PostPayloadData DTO): <pre>${JSON.stringify(
      postPayloadData,
    )}</pre>`;
  }
}
