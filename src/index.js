import _ from 'lodash';

function component() { 
    const element = document.createElement('div');
    element.innerHTML = _.join(['世界', '你好'], ['']);
    console.log('12')
    return element; 
}
document.body.appendChild(component());