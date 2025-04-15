const Button = (props) => {
    const {type, textContent, onClick, className=''} = props;

    return (
        <button onClick={onClick} type={type} className={className}>{textContent}</button>
    )
}

export default Button;