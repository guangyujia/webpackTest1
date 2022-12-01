import _ from 'lodash';

function component() {
    const element = document.getElementById('app')
    element.innerHTML = _.join(['Hello', 'webpack2'], ['']);
    return element;
}

document.body.appendChild(component());