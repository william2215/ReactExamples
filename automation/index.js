const instagram = require('./instagram');
(async () => {
    await instagram.initialize();
    await instagram.login('21_isa_21','22152674');
    await instagram.search('michi_qian');
    debugger;
})()