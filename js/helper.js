function submitChannel() {
    const channelValue = document.querySelector('.channel-input').value;
    // TODO : Send to Server
}

function newEl(type, attrs = {}) {
    const el = document.createElement(type);

    for (let attr in attrs) {
        const value = attrs[attr];
        if (attr == "innerText") el.innerText = value;
        else el.setAttribute(attr, value);
    }

    return el;
};