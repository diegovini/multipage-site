import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Contact() {
  const queryString = useLocation().search;  

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  console.log(name);

  return (
    <div>
        <h2>Hey {name}, contact us here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, iusto adipisci id blanditiis 
            consequuntur est quod exercitationem sint earum dolores libero debitis corporis mollitia laudantium amet 
            illum, enim, iste architecto!</p>
    </div>
  )
}
