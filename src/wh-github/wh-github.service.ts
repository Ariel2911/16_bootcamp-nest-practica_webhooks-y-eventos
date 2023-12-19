import { Injectable } from '@nestjs/common';
import {
  GitHubEvent,
  GitHubPayload,
  GitHubStar,
} from 'src/interfaces/wh-github.interface';

@Injectable()
export class WhGithubService {
  public handlePayload(event: GitHubEvent, payload: GitHubPayload) {
    let message = '';

    switch (event) {
      case 'star':
        message = this.handleStar(payload as GitHubStar);
        break;

      default:
        message = `unknown event ${event}`;
        break;
    }

    console.log(message);
  }

  private handleStar(payload: GitHubPayload) {
    const { action, sender, repository } = payload;
    return `User ${sender.login} ${action} star on ${repository.full_name}`;
  }
}
