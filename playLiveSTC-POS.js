const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setCookie(
    { 
      name: 'ASP.NET_SessionId',
      value: 'ucwuxz1wm5bhqjohwreegpg2',
      domain: 'pos.playlivenation.com',
      path: '/',
      expires: -1,
      httpOnly: true
    },
    { 
      name: 'NID',
      value: '126=j7lPBnZhobOXUm6lPw5CvVfkxZAuvuHO1G7rnTRVV9Zi4opUufADqy5Zn2ExqBXO6RkyGc8uJeXBPRiFQKvNxwL9ovuC1dV0iqAPEpQ77ivRlK5SjEBF-ETL8TG6iaAZ',
      domain: '.gstatic.com',
      path: '/',
      expires: 1537660938.766,
      httpOnly: true
    },
    { 
      name: 'Culture',
      value: 'en-US',
      domain: 'pos.playlivenation.com',
      path: '/',
      expires: -1
    },
    { 
      name: 'CultureUI',
      value: 'en-US',
      domain: 'pos.playlivenation.com',
      path: '/',
      expires: -1
    },
    { 
      name: 'LoginPage',
      value: '~/loginweb.aspx',
      domain: 'pos.playlivenation.com',
      path: '/',
      expires: -1
    },
    { 
      name: 'OrgVer',
      value: 'fNVOhzHxnPC6qB38hYZaZA%3d%3d',
      domain: 'pos.playlivenation.com',
      path: '/',
      expires: -1
    },
    { 
      name: '_ga',
      value: 'GA1.2.271159527.1519914675',
      domain: '.playlivenation.com',
      path: '/',
      expires: 1588098427
    },
    { 
      name: 'pldevauth',
      value: 'f1bfb02f-3fac-4dc5-ba80-bacc0ac098ea',
      domain: 'pos.playlivenation.com',
      path: '/',
      expires: 1557880355.41
    }
  );

  await page.goto('https://pos.playlivenation.com/login.aspx', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#txtOrgCode');
  await page.keyboard.type('1667');
  await page.click('#btnLogin');

  await page.waitForSelector('#txtEmail');
  await page.keyboard.type('<USERNAME>');
  await page.focus('#txtPassword');
  await page.keyboard.type('<PASSWORD>');
  await page.click('#btnLogin');

  // await page.waitForNavigation();
  await page.waitFor(5*1000);
  await page.click('a[href="Reports/Reports.aspx"]');
  // await page.waitForNavigation();
  await page.waitFor(3*1000);
  await page.click('#ctl00_pageContent_panelContainer > div:nth-child(1) > fieldset > button:nth-child(4)');
  await page.waitFor(15*1000);

  await page.screenshot({path: 'playLiveSTC.png'});
  // await page.pdf({ path: 'playLiveSTC.pdf', format: 'Letter' });
  await browser.close();
})();

