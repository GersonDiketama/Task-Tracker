import Button from "./Button"

export const Header = ({title, onAdd}) =>
{

    return (
        
        <header>
            <h1 className="header">{title}</h1>
            <Button color="green" text="Add" onClick={onAdd} />
        </header>
    )
}

// const headingStyle = {
//     color:"red",
//     backgroundColor:"black"
// }