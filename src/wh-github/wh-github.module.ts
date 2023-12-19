import { Module } from '@nestjs/common';
import { WhGithubService } from './wh-github.service';
import { WhGithubController } from './wh-github.controller';

@Module({
  controllers: [WhGithubController],
  providers: [WhGithubService],
})
export class WhGithubModule {}
