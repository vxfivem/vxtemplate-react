import * as controllers from './api/controllers';
import * as guards from './api/guards';
import * as exceptionHandlers from './api/exception-handlers';
import * as tranformers from './api/transformers';
import { AppFactory, ILogger, LOGGER_TAG } from '@vxframework/core';

const main = async (): Promise<void> => {
  const builder = AppFactory.createBuilder({
    locales: ['locales/client.json'],
    configs: ['configs/client.json'],
  });

  Object.values(controllers).forEach((controller) => builder.addController(controller));
  Object.values(guards).forEach((guard) => builder.addGuard(guard));
  Object.values(tranformers).forEach((transformer) => builder.addTransformer(transformer));
  Object.values(exceptionHandlers).forEach((exceptionHandler) => builder.addExceptionHandler(exceptionHandler));

  const app = builder.build();
  app.start();
  const logger = app.provider.get<ILogger>(LOGGER_TAG);
  Reflect.set(logger, 'context', 'APP');
  const configValue = builder.config.getOrThrow('client.value');
  logger.info(builder.locale.translate('client.greeting', { resourceName: GetCurrentResourceName(), configValue }));
};

main();
