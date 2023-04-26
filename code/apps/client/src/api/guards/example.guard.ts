import { IGuard, IEventContext } from '@vxframework/core';

export class ExampleGuard implements IGuard {
  public invoke(context: IEventContext): boolean | Promise<boolean> {
    
    return true;
  }
}
