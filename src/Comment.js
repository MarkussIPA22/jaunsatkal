import {useState, useEffect} from 'react';
function Comment(props) {
    const [come, setCome] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getData2() {
      
          const com = await fetch("https://jsonplaceholder.typicode.com/comments/1");
   
          const data2 = await com.json();
    
          console.log(data2);
          
          setCome(data2);
          setLoading(false);
        }
        getData2(); 
        
      }, [ ] );
 
return (
<>
{loading ? (
    <p>Loading...</p>
) : (
        <>
            <p>postId: {come.postId}</p>
            <p>id: {come.id}</p>
            <p>name: {come.name}</p>
            <p>email: {come.email}</p>
            <p>body: {come.body}</p>
            </>
 ) }
</>
    );
}
export default Comment;