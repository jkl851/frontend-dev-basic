const ex02 = require('./ex02');

const ex03 = async function(param) {
    try{
        const res = await ex02(param);
        console.log(res);

    } catch(err) {
        console.error(err);
    }
}

ex03('param-data');
ex03('param-error');

console.log('wait........');