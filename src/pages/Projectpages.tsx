import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'

const Projectpages = () =>{
    return(
    <>
        <pre>
            {JSON.stringify(MOCK_PROJECTS,null,'')}
        </pre>
        <blockquote cite="Benjamin Franklin">
            Tell me and I forget, teach me and I may remember, involve me and I learn.
        </blockquote>
    </>
    )
}

export default Projectpages