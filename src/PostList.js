import {useState, useEffect} from 'react';

function PostList(props) {
    return <p>Hello from PostList</p>
const [ListOfPosts, setListOfPosts] = useState ()
    useEffect(() => {
        async function getData() {
          const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
              );
          const Data = await response.json();
         console.log(Data)
         setListOfPosts(Data)
        }

        const postsJSX = ListOfPosts.map((singlePost) => {})


        getData(); 
        
      }, [ ] );
    }
    
    return <div>Hello from PostList</div>


export default PostList