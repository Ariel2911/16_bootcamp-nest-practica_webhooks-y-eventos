import { Body, Controller, Headers, Post } from '@nestjs/common';
import { WhGithubService } from './wh-github.service';

@Controller('wh-github')
export class WhGithubController {
  constructor(private readonly whGithubService: WhGithubService) {}

  @Post()
  webhookHandler(
    @Headers('x-github-event') githubEvent: string,
    @Body() body: any,
  ) {
    console.log({ githubEvent });
    return { githubEvent };
  }
}
