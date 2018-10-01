import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

async function getContentElement(element: E2EElement) {
  return await element.shadowRoot.querySelector('div');
}

describe('testing-props-e2e', () => {
  let page: E2EPage;
  let element: E2EElement;
  let contentElement: any;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
      <testing-props first="Peter" last="Parker"></testing-props>
    `
    });
    element = await page.find('testing-props');
    contentElement = await element.shadowRoot.querySelector('div');
  });

  it('should work with both the first and the last name', async () => {
    expect(contentElement).toEqualText('Hello, my name is Peter Parker');
  });

  it('should work with both the first and the last name', async () => {
    element.setProperty('first', 'Bruce');
    element.setProperty('last', 'Wayne');

    await page.waitForChanges();
    // re evaluate the content element
    // contentElement = await element.shadowRoot.querySelector('div');

    contentElement = await getContentElement(element);

    expect(contentElement).toEqualText('Hello, my name is Bruce Wayne');
  });
});
