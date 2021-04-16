import { AsyncLocalStorage } from 'async_hooks';

import { proxifyWithWait } from './lib/proxify';
import { IServiceContext } from './types/ServiceClass';
import { ILicense } from './types/ILicense';

export const License = proxifyWithWait<ILicense>('license');

export const asyncLocalStorage = new AsyncLocalStorage<IServiceContext>();
