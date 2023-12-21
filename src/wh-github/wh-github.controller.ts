import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { WhGithubService } from './wh-github.service';
import { GitHubEvent } from 'src/interfaces/wh-github.interface';
import { GithubGuard } from 'src/guards/github/github.guard';

@Controller('wh-github')
export class WhGithubController {
  constructor(private readonly whGithubService: WhGithubService) {}

  @UseGuards(GithubGuard)
  @Post()
  webhookHandler(
    @Headers('x-github-event') githubEvent: GitHubEvent,
    @Headers('X-Hub-Signature-256') signature: string,
    @Body() body: any,
  ) {
    this.whGithubService.handlePayload(githubEvent, body);
    return { githubEvent };
  }
}
