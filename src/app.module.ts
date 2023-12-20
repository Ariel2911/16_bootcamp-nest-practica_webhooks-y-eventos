import { Module } from '@nestjs/common';
import { WhGithubModule } from './wh-github/wh-github.module';
import { DiscordService } from './discord/discord.service';

@Module({
  imports: [WhGithubModule],
  controllers: [],
  providers: [DiscordService],
})
export class AppModule {}
