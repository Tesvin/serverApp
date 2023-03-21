const React = require('react')
const Default = require('./layout/default')

function Index({ projects }){
    return(
        <Default>
            <h2 className='index'>Welcome To My Blog👋</h2>
            {/* <p> I want to see my first {projects[0].name} project </p> */}
            <ul>
            {
                projects.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name}
                            <button className='btn'>
                            <a href={`/projects/${index}`} target="_blank">
                                See Image</a>
                            </button>
                            <div>
                                <hr/>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </Default>
    )
}

module.exports = Index