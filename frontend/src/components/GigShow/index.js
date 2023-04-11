import React from 'react'
import { useParams } from 'react-router-dom'



//https://herewecode.io/blog/react-get-url-params/#:~:text=The%20best%20way%20to%20get,to%20fetch%20the%20query%20parameters.



function GigShow () {
    const { gigId } = useParams();
    const [gig, setGig] = useState({})

    useEffect(() => {
        fetch(`api/gigs/${gigId}`)
            .then((response) => {
                
            })
    })


    return (
        <div className="main-wrapper">
            <div className="header">

            </div>
        </div>
    )
}

export default GigShow;