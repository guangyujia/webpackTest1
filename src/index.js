import _ from 'lodash';
import './index.css';

function component() {
    const element = document.getElementById('app')
    element.innerHTML = _.join(['Hello', 'webpack3'], ['']);
    return element;
}

document.body.appendChild(component());