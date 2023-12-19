import { Injectable } from '@nestjs/common';
import {
  GitHubEvent,
  GitHubIssue,
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

      case 'issues':
        message = this.handleIssue(payload as GitHubIssue);
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

  private handleIssue(payload: GitHubIssue): string {
    const { action, issue, sender } = payload;

    if (action === 'opened') {
      return `An issue was opened with this title ${issue.title} by ${sender.login}`;
    }

    if (action === 'closed') {
      return `An issue was closed by ${sender.login}`;
    }

    if (action === 'reopened') {
      return `An issue was reopened by ${sender.login}`;
    }

    return `Unhandle action for the issue event ${action}`;
  }
}
