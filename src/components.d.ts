/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ProkaryoteLoader {

    }
  }

  interface HTMLProkaryoteLoaderElement extends StencilComponents.ProkaryoteLoader, HTMLStencilElement {}

  var HTMLProkaryoteLoaderElement: {
    prototype: HTMLProkaryoteLoaderElement;
    new (): HTMLProkaryoteLoaderElement;
  };
  interface HTMLElementTagNameMap {
    'prokaryote-loader': HTMLProkaryoteLoaderElement;
  }
  interface ElementTagNameMap {
    'prokaryote-loader': HTMLProkaryoteLoaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'prokaryote-loader': JSXElements.ProkaryoteLoaderAttributes;
    }
  }
  namespace JSXElements {
    export interface ProkaryoteLoaderAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;