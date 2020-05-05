const puppeteer = require("puppeteer");
const DIRECCION_BASE = 'https://instagram.com/'
const instagram = {
    browser: null,
    page : null,

    initialize : async () => {
        instagram.browser = await puppeteer.launch({
            headless : false
    });
    instagram.page = await instagram.browser.newPage();
    
    },

    login: async (username, password) => {
        await instagram.page.goto(DIRECCION_BASE, {
            waitUntil : 'networkidle2'
        });

        let boton = await instagram.page.$x('//a[contains(text(), "Log in")]');

        await boton[0].click();
        await instagram.page.waitForNavigation({waitUntil : 'networkidle2'})
        await instagram.page.waitFor(1000);
        await instagram.page.type('input[name="username"]', username, { delay: 50 });
        await instagram.page.type('input[name="password"]', password, { delay: 50 });
        boton = await instagram.page.$x('//button[contains(@type, "submit")]');
        await boton[0].click();
        await instagram.page.waitForNavigation({waitUntil : 'networkidle2'})
        await instagram.page.waitFor(1000);
        boton = await instagram.page.$x('//button[contains(text(), "Not Now")]');
        await boton[0].click();
        debugger;
    },
    search: async (look) => {
    
   }
}

module.exports = instagram;