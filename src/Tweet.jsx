export function Tweet({id, name, content, like, onDelete}) {

    const onLike = () => {
        console.log("LIKE", name)
    }
    
    return (<div className="tweet">
        <button onClick={() => onDelete(id)} className="delete">❌</button>
        <h3>{name}</h3>
        <p>{content}</p>
        <button onclick={onLike()}>{like} ❤️</button>
    </div>
    );
}