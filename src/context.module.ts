import {Global, MiddlewareConsumer, Module} from "@nestjs/common";
import {ContextService} from "./context.service";
import {APP_PIPE} from "@nestjs/core";
import {ContextPipe} from "./context.pipe";
import {ContextMiddleware} from "./context.middleware";

@Global()
@Module({
    providers: [
        ContextService,
        {provide: APP_PIPE, useClass: ContextPipe}
    ],
    exports: [ContextService]
})
export class ContextModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ContextMiddleware).forRoutes('*');
    }
}
