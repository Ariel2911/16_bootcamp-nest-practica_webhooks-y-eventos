import { Body, Controller, Headers, Post } from '@nestjs/common';
import { WhGithubService } from './wh-github.service';
import { GitHubEvent } from 'src/interfaces/wh-github.interface';

@Controller('wh-github')
export class WhGithubController {
  constructor(private readonly whGithubService: WhGithubService) {}

  @Post()
  webhookHandler(
    @Headers('x-github-event') githubEvent: GitHubEvent,
    @Body() body: any,
  ) {
    // console.log({ githubEvent });
    this.whGithubService.handlePayload(githubEvent, body);
    return { githubEvent };
  }
}
