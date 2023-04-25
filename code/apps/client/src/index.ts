import { AppFactory, OnNetEvent } from '@vxframework/core';

const builder = AppFactory.createBuilder();

class TestController {
  @OnNetEvent('qwe')
  public onNet(): void {
    return;
  }
}

builder.addController(TestController);

const app = builder.build();

app.start();
