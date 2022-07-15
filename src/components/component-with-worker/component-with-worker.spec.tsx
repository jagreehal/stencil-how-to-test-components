import { newSpecPage } from '@stencil/core/testing';
import { ComponentWithWorker } from './component-with-worker';

describe('component-with-worker unit tests', () => {
  let page;
  let element: Element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ComponentWithWorker],
      html: '<component-with-worker></component-with-worker>',
    });
    element = await page.doc.querySelector('component-with-worker');
  });

  it('should be able to render', async () => {
    await element.querySelector('button').click();
    await page.waitForChanges();
    expect(element.textContent).toEqual(
      'StartProgress - 0, Status - NOT STARTED'
    );
  });
});
