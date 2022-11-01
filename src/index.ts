import { registerPlugin } from '@capacitor/core';

import type { CITBRecorderPlugin } from './definitions';

const CITBRecorder = registerPlugin<CITBRecorderPlugin>('CITBRecorder', {
  web: () => import('./web').then(m => new m.CITBRecorderWeb()),
});

export * from './definitions';
export { CITBRecorder };
