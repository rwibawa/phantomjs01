const puppeteer = require('puppeteer');

(async () => {
    const args = [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list '
    ];

    const options = {
        args,
        headless: true,
        ignoreHTTPSErrors: true,
    };

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setViewport({
        width: 1024,
        height: 768,
        isLandscape: true
    });

    await page.goto('https://plslaptop-02742/login.jsp', { waitUntil: 'networkidle0' });
    await page.waitForSelector('#uname');
    await page.keyboard.type('maiello');
    await page.focus('#pwd');
    await page.keyboard.type('hello#');
    await page.click('button[value="Login"]');

    await page.waitForSelector('#plink-9001');
    // await page.waitForNavigation();
    // xpath = "a[contains(text(),'Searching')]";
    await page.click('#plink-9001');
    await page.waitFor(6*1000);

    const frames = await page.frames();
    const tryItFrame = frames.find(f => f.name() === 'iframe-left-id');
    const button = await tryItFrame.$('#accessPatient');
    button.click();

    /*
    const outerHTML = await framedButton.evaluate(e => e.parentNode.outerHTML);
    console.log('the outerhtml: ', outerHTML); // to verify we're talking about the right element.. (we are.)

    framedButton.click();
    */

    // await page.focus('#patient-id');
    await page.waitFor(2*1000);
    await page.keyboard.type('khangz001\n');
    await page.waitFor(2*1000);

    await page.screenshot({path: 'emps.png'});
    // await page.pdf({ path: 'emps.pdf', format: 'Letter' });
    await browser.close();
})();
