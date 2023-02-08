const Header = ({todos}) => {
return (
    <header>
        <div>
        <h2>{todos.name}</h2>
        <p>{todos.update}</p>
        </div>
    </header>
)
}

export default Header