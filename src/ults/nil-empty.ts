import { isNil } from '@nestjs/common/utils/shared.utils';

export function nilToEmpty<T = any, R = any>(value: T): R | {} {
  return isNil(value) ? {} : value;
}
