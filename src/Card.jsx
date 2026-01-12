export function Card({title,description}){
 const handleClick = () => {
    alert(`Title: ${title}\nDescription: ${description}`);
 }

    return <div >
        <button onClick={handleClick}>Show Title</button>
        <h1>{title}</h1>
        <p>{description}</p>
        
    </div>
}

