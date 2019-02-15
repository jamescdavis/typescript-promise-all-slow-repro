import { SlowType } from './slow-type';

declare global {
    interface Array<T> extends SlowType {}
}
