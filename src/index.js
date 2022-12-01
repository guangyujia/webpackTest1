import _ from 'lodash';
import './index.css';

(function component() {
    const app = document.getElementById('app');
    const element = document.createElement('div');
    element.classList.add('box');
    element.innerHTML = _.join(['Hello', 'webpack3'], ['']);
    app.appendChild(element);
})()
