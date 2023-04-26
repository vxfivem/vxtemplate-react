import { IEventArgTransformer, TransformsEventArgs } from '@vxframework/core';

@TransformsEventArgs(Number)
export class NumberTransformer implements IEventArgTransformer<number> {
  public transform(value: unknown): number {
    return Number(value);
  }
}
