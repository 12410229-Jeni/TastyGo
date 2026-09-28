const ClickButton = () => {
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
        alert('Button was clicked!');
        console.log ('click :' + event.target);
    };

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}

export default ClickButton;