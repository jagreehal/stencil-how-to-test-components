import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-props-shadow-e2e', () => {
  let page: E2EPage;
  let element: E2EElement;
  let contentElement: any;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
      <testing-props-shadow first="Peter" last="Parker"></testing-props-shadow>
    `
    });
    element = await page.find('testing-props-shadow');
    contentElement = await page.find('testing-props-shadow >>> div');
  });

  it('should work with both the first and the last name', async () => {
    expect(contentElement).toEqualText('Hello, my name is Peter Parker');
  });

  it('should be able to change first and the last name', async () => {
    element.setProperty('first', 'Bruce');
    element.setProperty('last', 'Wayne');

    await page.waitForChanges();

    expect(contentElement).toEqualText('Hello, my name is Bruce Wayne');
  });
});
