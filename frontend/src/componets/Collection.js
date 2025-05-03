import React, { useEffect, useState, useTransition } from 'react'
import axios from '../utils/axios'
import Loader from './Loader';
import Video from './Video';

const Collection = () => {

    const [data, setData] = useState([])
    const [isPending, setTransition] = useTransition();

    const fetchData = async () => {
        setTransition(async () => {
            const response = await axios.get("/attachments/all");
            setData(response.data)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    // console.log(data)

    return (
        <div style={{ margin: "auto", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, height: "100%", padding:20 }}>
            {!data && <h1>No Data available</h1>}
            {isPending && <Loader />}
            {!isPending && data.map((item) => {
                return <Video
                    key={item._id}
                    imageSrc={item._id}
                    videoUrl={item.videoUrl}
                />
            })}

        </div>
    )
}

export default Collection