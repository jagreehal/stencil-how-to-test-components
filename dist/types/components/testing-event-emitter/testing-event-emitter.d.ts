import '../../stencil.core';
import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export interface SomethingHappened {
    message: string;
}
export declare class TestingEventEmitter {
    somethingHappened: EventEmitter<SomethingHappened>;
    handleClick: () => void;
    render(): JSX.Element;
}
