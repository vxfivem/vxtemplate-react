import { Controller, ILogger, Inject, LOGGER_TAG, OnChat, sleep } from '@vxframework/core';

@Controller('example')
export class ExampleController {
  @Inject(LOGGER_TAG)
  private readonly logger: ILogger;

  @OnChat('testserver')
  public async testCommandServer(value: number): Promise<void> {
    await sleep(0);
    this.logger.info('testserver is triggered with ' + value);
    this.logger.info('typeof value = ' + typeof value);
  }
}
