import { classToPlain, plainToClass, TransformOptions } from 'class-transformer';
import { nilToEmpty } from './nil-empty';
import { removeEmpty } from './remove-empty';

export function transform(value: any, type: any, options?: TransformOptions) {
  return removeEmpty(classToPlain(plainToClass(type, nilToEmpty(value), options), options));
}
