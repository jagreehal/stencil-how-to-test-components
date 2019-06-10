/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  SomethingHappened,
} from './components/testing-event-emitter/testing-event-emitter';

export namespace Components {
  interface CallbackTest {
    'clickProp': Function | undefined;
  }
  interface TestingClickEvent {}
  interface TestingEventEmitter {}
  interface TestingMethods {
    'incrementCount': () => Promise<number>;
  }
  interface TestingProps {
    'first': string;
    'last': string;
  }
  interface TestingRender {}
  interface TestingUpdatesAriaProperty {}
  interface UsingSnapshots {
    'first': string;
    'last': string;
  }
}

declare global {


  interface HTMLCallbackTestElement extends Components.CallbackTest, HTMLStencilElement {}
  var HTMLCallbackTestElement: {
    prototype: HTMLCallbackTestElement;
    new (): HTMLCallbackTestElement;
  };

  interface HTMLTestingClickEventElement extends Components.TestingClickEvent, HTMLStencilElement {}
  var HTMLTestingClickEventElement: {
    prototype: HTMLTestingClickEventElement;
    new (): HTMLTestingClickEventElement;
  };

  interface HTMLTestingEventEmitterElement extends Components.TestingEventEmitter, HTMLStencilElement {}
  var HTMLTestingEventEmitterElement: {
    prototype: HTMLTestingEventEmitterElement;
    new (): HTMLTestingEventEmitterElement;
  };

  interface HTMLTestingMethodsElement extends Components.TestingMethods, HTMLStencilElement {}
  var HTMLTestingMethodsElement: {
    prototype: HTMLTestingMethodsElement;
    new (): HTMLTestingMethodsElement;
  };

  interface HTMLTestingPropsElement extends Components.TestingProps, HTMLStencilElement {}
  var HTMLTestingPropsElement: {
    prototype: HTMLTestingPropsElement;
    new (): HTMLTestingPropsElement;
  };

  interface HTMLTestingRenderElement extends Components.TestingRender, HTMLStencilElement {}
  var HTMLTestingRenderElement: {
    prototype: HTMLTestingRenderElement;
    new (): HTMLTestingRenderElement;
  };

  interface HTMLTestingUpdatesAriaPropertyElement extends Components.TestingUpdatesAriaProperty, HTMLStencilElement {}
  var HTMLTestingUpdatesAriaPropertyElement: {
    prototype: HTMLTestingUpdatesAriaPropertyElement;
    new (): HTMLTestingUpdatesAriaPropertyElement;
  };

  interface HTMLUsingSnapshotsElement extends Components.UsingSnapshots, HTMLStencilElement {}
  var HTMLUsingSnapshotsElement: {
    prototype: HTMLUsingSnapshotsElement;
    new (): HTMLUsingSnapshotsElement;
  };
  interface HTMLElementTagNameMap {
    'callback-test': HTMLCallbackTestElement;
    'testing-click-event': HTMLTestingClickEventElement;
    'testing-event-emitter': HTMLTestingEventEmitterElement;
    'testing-methods': HTMLTestingMethodsElement;
    'testing-props': HTMLTestingPropsElement;
    'testing-render': HTMLTestingRenderElement;
    'testing-updates-aria-property': HTMLTestingUpdatesAriaPropertyElement;
    'using-snapshots': HTMLUsingSnapshotsElement;
  }
}

declare namespace LocalJSX {
  interface CallbackTest extends JSXBase.HTMLAttributes<HTMLCallbackTestElement> {
    'clickProp'?: Function | undefined;
  }
  interface TestingClickEvent extends JSXBase.HTMLAttributes<HTMLTestingClickEventElement> {}
  interface TestingEventEmitter extends JSXBase.HTMLAttributes<HTMLTestingEventEmitterElement> {
    'onSomethingHappened'?: (event: CustomEvent<SomethingHappened>) => void;
  }
  interface TestingMethods extends JSXBase.HTMLAttributes<HTMLTestingMethodsElement> {}
  interface TestingProps extends JSXBase.HTMLAttributes<HTMLTestingPropsElement> {
    'first'?: string;
    'last'?: string;
  }
  interface TestingRender extends JSXBase.HTMLAttributes<HTMLTestingRenderElement> {}
  interface TestingUpdatesAriaProperty extends JSXBase.HTMLAttributes<HTMLTestingUpdatesAriaPropertyElement> {}
  interface UsingSnapshots extends JSXBase.HTMLAttributes<HTMLUsingSnapshotsElement> {
    'first'?: string;
    'last'?: string;
  }

  interface IntrinsicElements {
    'callback-test': CallbackTest;
    'testing-click-event': TestingClickEvent;
    'testing-event-emitter': TestingEventEmitter;
    'testing-methods': TestingMethods;
    'testing-props': TestingProps;
    'testing-render': TestingRender;
    'testing-updates-aria-property': TestingUpdatesAriaProperty;
    'using-snapshots': UsingSnapshots;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


