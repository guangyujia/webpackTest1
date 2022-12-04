import _ from 'lodash';
import printMe from './print.js';

function component() { 
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['世界', '你好'], ['']);
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    console.log('12')
    return element; 
}
document.body.appendChild(component());