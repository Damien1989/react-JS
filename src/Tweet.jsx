export function Tweet({name, content, like}) {

    const onLike = () => {
        console.log("LIKE", name)
    }
    
    return (<div className="tweet">
        <h3>{name}</h3>
        <p>{content}</p>
        <button onclick={onLike()}>{like} ❤️</button>
    </div>
    );
}