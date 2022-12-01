import _ from 'lodash';
import './index.css';
import Icon from './chinese_icon.png';

(function component() {
    const app = document.getElementById('app');
    const element = document.createElement('div');
    element.classList.add('box');
    element.innerHTML = _.join(['Hello', 'webpack3'], ['']);
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    app.appendChild(element);
})()
