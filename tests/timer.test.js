import { sleep } from '../js/timer.js';

describe('Timer' , () => {

    it.concurrent('It should wait 3 seconds',async function() {
       const t = Date.now();
       await sleep(3);
       expect(Date.now() - t).toBeGreaterThanOrEqual(3000)
    } )

    it.concurrent('It should wait 2 seconds',async function() {
        const t = Date.now();
        await sleep(2);
        expect(Date.now() - t).toBeGreaterThanOrEqual(2000)
     } )

})