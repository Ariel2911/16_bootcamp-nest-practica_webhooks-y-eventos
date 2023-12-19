import { Module } from '@nestjs/common';
import { WhGithubModule } from './wh-github/wh-github.module';

@Module({
  imports: [WhGithubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
