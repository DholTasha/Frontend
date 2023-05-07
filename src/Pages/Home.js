import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import Layout from '../Components/Layout';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://dhol-tasha-backend.vercel.app/team/all')
            .then((res) => {
                setData(res.data.team);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Layout>
            <div className="home">
                <div className="Cards">
                {data
                    ? data.map((element, key) => (
                        <Card
                            key={key}
                            id={element._id}
                            name={element.name}
                            mobile={element.mobile}
                            email={element.email}
                            numberOfEvents={element.numberOfEvents}
                            maleDhol={element.maleDhol}
                            maleTasha={element.maleTasha}
                            femaleDhol={element.femaleDhol}
                            femaleTasha={element.femaleTasha}
                            address={element.address}
                        />
                        ))
                    : alert("No Teams")}
                </div>
            </div>
        </Layout>
    )
}

export default Home