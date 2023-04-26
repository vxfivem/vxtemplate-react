import { Controller, ILogger, Inject, LOGGER_TAG, OnChat } from '@vxframework/core';

@Controller('example')
export class ExampleController {
  @Inject(LOGGER_TAG)
  private readonly logger: ILogger;

  @OnChat('testclient')
  public testCommandClient(value: number): void {
    this.logger.info('testclient is triggered with ' + value);
    this.logger.info('typeof value = ' + typeof value);
  }
}
