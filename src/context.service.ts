import {Injectable} from "@nestjs/common";

@Injectable()
export class ContextService {
    req: any;
    res: any;
    next?: () => void;
}
