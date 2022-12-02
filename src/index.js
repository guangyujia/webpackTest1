import _ from 'lodash';
import './index.css';
import Icon from './chinese_icon.png';
import json from './data.json5';

(function component() {
    const app = document.getElementById('app');
    const element = document.createElement('div');
    element.classList.add('box');
    element.innerHTML = _.join(['世界', '你好'], ['']);
    const myIcon = new Image();
    myIcon.src = Icon;
    
    console.log(json.title)
    console.log(json.owner.name)
    element.appendChild(myIcon);
    app.appendChild(element);
})()
