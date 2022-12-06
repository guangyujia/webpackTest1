function getComponent() { 
    return import('lodash')
    .then(({default: _}) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['世界', '你好'], ['']);
        return element;
    })
    .catch(err => 'An error occured while loading the component');
}

getComponent().then((component) => {
    document.body.appendChild(component)
})