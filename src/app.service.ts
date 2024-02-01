import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    describe('getHello', () => {});
    return 'Hello World!';
  }
}
