// const Button = (props) =>{
const Button = ({children}) =>{
    return <button style={{
        padding: "5px, 10px",
        borderRadius: "5px",
        fontSize: "18px",
        color: "white",
        backgroundColor: "blue"    
    }}>
    {/* {props.children} */}
    {children}
    </button>;
}

export default Button;