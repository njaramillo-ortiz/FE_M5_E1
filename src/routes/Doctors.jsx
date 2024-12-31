import React, { useEffect, useRef, useState } from "react";
import { DoctorCardGrid } from "../components/DoctorCardGrid";
import { Button, Segment } from "semantic-ui-react";
import { RequestError } from "../components/RequestError";

export function Doctors()
{
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    useEffect(() => {
        getDoctors(null)
    }, [])

    async function getDoctors(area)
    {
        setError(null);
        setLoading(true);
        await fetch('/src/data/doctors.json')
            .then(result => result.json())
            .then(data => {
                if(area == null || area == "")
                {
                    setDoctors(data)
                }
                else
                {
                    let filteredData = [];
                    data.forEach(d =>
                    {
                        if(d.area === area)
                        {
                            filteredData.push(d);
                        }
                    })
                    setDoctors(filteredData)
                }
                setLoading(false);
            })
            .catch(err => {
                setError(err);
            })
    }

    function FilterInput({label, placeholder, onChange})
    {
        const inputRef = useRef();

        const margin = {margin: "0px 5px"}

        function clear()
        {
            inputRef.current.value = null
            onChange(null);
        }

        return(
            <Segment padded secondary>
                <label style={margin}>{label}</label>
                <input style={margin}placeholder={"Ej: "+placeholder} ref={inputRef}></input>
                <Button onClick={() => onChange(inputRef.current.value)}>Filtrar</Button>
                <Button onClick={() => clear()}>Limpiar</Button>
            </Segment>
        )
    }

    return(
        <>
            <Segment>
                <h1>Equipo Médico</h1>
                <FilterInput label="Filtrar por especialidad" placeholder="Cirugia" onChange={getDoctors} />
                <Segment loading={loading}>
                    <DoctorCardGrid doctors={doctors} />
                </Segment>
                {
                    error && <RequestError error={error} callback={getDoctors}/>
                }
            </Segment>
        </>
    );
}