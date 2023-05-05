import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import Layout from '../Components/Layout';

const Home = () => {
    const [Arr, setArr] = useState([])
    useEffect(() => {
        axios.get('https://dhol-tasha-backend.vercel.app/team/all')
            .then((res) => {
                setArr(res.data.team);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Layout>
            <div className="home">
                <div className="Cards">
                    {Arr.map(Card)}
                </div>
            </div>
        </Layout>
    )
}

export default Home