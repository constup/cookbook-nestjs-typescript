import { Controller, Get } from '@nestjs/common';

@Controller('sample-base')
export class SampleBaseController {
  @Get()
  sampleAction(): string {
    return `
Sample base controller.

To create a new controller run: <code>nest generate controller SampleBase</code><br>
Open <code>sample-base/sample-base.controller.ts</code> and:
<ul>
  <li>add <code>Get</code> to <code>import</code>;</li>
  <li>Create <code>sampleAction()</code>. Name is not important and can be anything.</li>
  <li>Mark <code>sampleAction</code> with <code>@Get()</code> (HTTP GET request)</li>
</ul>

Full documentation is available at: <a href="https://docs.nestjs.com/controllers" target="_blank">https://docs.nestjs.com/controllers</a>`;
  }
}
