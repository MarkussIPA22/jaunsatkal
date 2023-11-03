import { useEffect , useState } from "react"

function Comment(props) {
 
    return (
        <>
        
        <p>{props.postid}</p>
        <p>userID: {props.userId}</p>
        <p>name: {props.name}</p>
        <p>email: {props.email}</p>


