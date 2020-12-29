import React, { useEffect, useState } from "react"
import api from "../../../core/api"

export const Catalog = () => {
    const [list, setData] = useState([]);


    useEffect(() => {
        let mounted = true;
        getData().then((items: any) => {
            if (mounted) {
                setData(items.data)
            }
        })
        return () => {
            mounted = false;
        }
    }, []);


    function getData() {
        return api.get('https://localhost:44309/weatherforecast');
    }

    return (
        <div>
            <div className="wrapper">
                <h1>My Grocery List</h1>
                <ul>
                    {list.map((item: any, index: number) => <li key={index}>{item.summary}</li>)}
                </ul>
            </div>
        </div>
    )

}