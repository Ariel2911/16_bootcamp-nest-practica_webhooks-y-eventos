import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordService {
  private readonly discordWebhookUrl =
    'https://discordapp.com/api/webhooks/1186792900638560327/sCtS3LJ89VnQyuPgqJTjubh5k6nQA3aTHV75ojcHZn0b0da9PqvFfa7WPivX-euuTFLy';

  async notify(message: string) {
    const body = {
      content: message,
    };

    const resp = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.log('Error sending message to discord');
      return false;
    }

    return true;
  }
}
