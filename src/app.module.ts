import { Module } from '@nestjs/common';
import { WhGithubModule } from './wh-github/wh-github.module';
import { DiscordService } from './discord/discord.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), WhGithubModule],
  controllers: [],
  providers: [DiscordService],
})
export class AppModule {}
