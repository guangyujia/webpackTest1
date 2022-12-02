import _ from 'lodash';

const app = document.getElementById('app');
function component() { 
    const element = document.createElement('div');
    element.innerHTML = _.join(['世界', '你好'], ['']);
    return element; 
}
app.appendChild(component());