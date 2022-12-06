import _ from 'lodash';
import Print from './print';

function getComponent() { 
    return import('lodash')
    .then(({default: _}) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['世界', '你好'], ['']);
        element.onclick = Print.bind(null, 'Hello webpack!')
        return element;
    })
    .catch(err => 'An error occured while loading the component');
}
getComponent().then((component) => {
    document.body.appendChild(component)
})