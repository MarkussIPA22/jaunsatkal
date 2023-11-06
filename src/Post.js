function Post(props) {
    return <p>Hello from props.userId</p>



return (
    <>
    <h2>{props.title}</h2>
    <p>{props.userId}</p>
    <p>: {props.id}</p>
    <p>: {props.title}</p>
    <p>: {props.body}</p>
   
    
    </>
    
    )
}
    export default Post;