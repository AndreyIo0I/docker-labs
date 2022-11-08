import {Injectable} from '@nestjs/common'

@Injectable()
export class AppService {
  getNodes(): string {
    return JSON.stringify([{
      type: 'folder',
      id: '1',
      name: 'my folder',
      link: '/',
      modified: new Date(),
    }])
  }
}
