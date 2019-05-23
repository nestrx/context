import {Injectable, NestMiddleware} from "@nestjs/common";
import {ContextService} from "./context.service";

@Injectable()
export class ContextMiddleware implements NestMiddleware {
    constructor(public context: ContextService) {
    }

    use(req: any, res: any, next: () => void): any {
        this.context.req = req;
        this.context.res = res;
        this.context.next = next;
        next();
    }
}
