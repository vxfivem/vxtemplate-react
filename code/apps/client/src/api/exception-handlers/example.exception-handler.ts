import { HandlesException, IExceptionHandler, Inject, LOGGER_TAG, ILogger, IEventContext } from '@vxframework/core';
import { ExampleException } from '../../core';

@HandlesException(ExampleException)
export class DropUserExceptionHandler implements IExceptionHandler<ExampleException> {
  @Inject(LOGGER_TAG)
  private readonly logger: ILogger;

  public handle(context: IEventContext, exception: ExampleException): void | Promise<void> {
    this.logger.error(exception, 'Example exception is handled');
  }
}
