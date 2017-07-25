
function decorator(type) {
    if (type != "modal" && type != "screen") {
        throw (type);
    }
}
decorator.type = {
    modal: "modal",
    screen: "screen",
};

global.PAGE = decorator;
export default decorator;