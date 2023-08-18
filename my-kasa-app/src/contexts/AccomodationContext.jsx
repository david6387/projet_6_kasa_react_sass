import React, { createContext, useContext, useEffect, useState } from 'react'


const AccomodationContext = createContext()

export const AccomodationProvider = ({children}) => {
    const [accomodations, setAccomodations] = useState([])

    useEffect(() => {
        fetch("/data/logements.json")
        .then((res)=> {return res.json()})
        .then((datas)=> {
            console.log(datas);
            datas.forEach((data) => {
                data.slug = data.title.toLowerCase().replaceAll("", "-");
            });
            setAccomodations(datas)
        })
        .catch((error) => console.log(error))
    },[])
    return <AccomodationContext.Provider value={accomodations}>{children}</AccomodationContext.Provider>
}

export const useAccomodations = () => {
    return useContext(AccomodationContext)
}
