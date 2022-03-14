import { useLocation } from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

    //?name=mario

    return ( <div >
        <h2 > Hey {name}, Contact Us Here... </h2> 
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, 
            officia dolor esse perspiciatis pariatur quaerat quo nobis quam temporibus cupiditate voluptatibus, 
            omnis consequuntur obcaecati delectus quis quos hic aliquam.Maxime. </p> 
    </div>
    )
}