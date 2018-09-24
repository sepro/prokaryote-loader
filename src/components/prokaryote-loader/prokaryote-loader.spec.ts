import { TestWindow } from '@stencil/core/testing';
import { ProkaryoteLoader } from './prokaryote-loader';

describe('my-component', () => {
  it('should build', () => {
    expect(new ProkaryoteLoader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMyComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ProkaryoteLoader],
        html: '<prokaryote-loader></prokaryote-loader>'
      });
    });

    // it('should work without parameters', () => {
      // expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    // });

    // it('should work with a first name', async () => {
      // element.first = 'Peter';
      // await testWindow.flush();
      // expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    // });

    // it('should work with a last name', async () => {
      // element.last = 'Parker';
      // await testWindow.flush();
      // expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });

    // it('should work with both a first and a last name', async () => {
      // element.first = 'Peter';
      // element.last = 'Parker';
      // await testWindow.flush();
      // expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    });
  });
});
