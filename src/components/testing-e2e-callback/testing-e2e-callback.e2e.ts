import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('the component should', () => {
  let page: E2EPage;
  let element: E2EElement;
  let button: any;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(`<callback-test></callback-test>`)
    button = await page.find('callback-test >>> .button');
  });

  it('executes the callback function', async () => {
    const callback = jest.fn();
    
    await page.exposeFunction("functionToInject", callback);

    await page.$eval("callback-test", (elm: any) => {
      elm.clickProp = this.functionToInject;
    });

    await page.waitForChanges();

    await button.click();

    expect(callback).toBeCalled();
  });
});
