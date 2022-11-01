import { WebPlugin } from '@capacitor/core';

import type { CITBRecorderPlugin } from './definitions';

export class CITBRecorderWeb extends WebPlugin implements CITBRecorderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
