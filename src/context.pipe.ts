import {ArgumentMetadata, Injectable, Optional, PipeTransform} from "@nestjs/common";
import {ContextService} from "./context.service";
import {transform} from "./ults";
import {TransformOptions} from "class-transformer";

@Injectable()
export class ContextPipe implements PipeTransform {
    options: TransformOptions;
    constructor(public context?: ContextService) {
    }

    transform(value, metadata: ArgumentMetadata) {
        if (this.context && this.context.req && this.context.req.user) {
            this.options = {groups: [this.context.req.user.role]};
        }
        const {metatype, type} = metadata;
        if (['body', 'query'].indexOf(type) !== -1) {
            return transform(value, metatype, this.options);
        }
        return value;
    }
}
