import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-props-e2e', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
      <testing-props first="Peter" last="Parker"></testing-props>
    `
    });
    element = await page.find('testing-props');
  });

  it('should work with both the first and the last name', async () => {
    expect(element).toEqualText('Hello, my name is Peter Parker');
  });

  it('should be able to change first and the last name', async () => {
    element.setProperty('first', 'Bruce');
    element.setProperty('last', 'Wayne');

    await page.waitForChanges();

    expect(element.textContent).toEqualText('Hello, my name is Bruce Wayne');
  });
});
