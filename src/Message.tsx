// PascalCasing
function Message() {
    const name = 'Cassia';
    if (name)
        // JSX: JavaScript XML
        // jsx gets compiled to javascript by react -- you can see it in babel
        return <h1>Hello {name}!</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;