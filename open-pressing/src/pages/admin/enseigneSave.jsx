import EnseigneForm from "../../components/enseigneForm"
import Tables from "@/components/table"
import EnseigneTable from "../../components/enseigneTable"
import Card from "@/components/Card"
import getEnseigne from "../api/getEnseigne"
import { useEffect, useState } from "react"
export default function () {
    const [enseigne,setEnseigne]= useState([])
   useEffect(()=>{
    getEnseigne(setEnseigne);
   },[0])
    console.log(enseigne[0])
    return(
        <>
            <Card enseigne={enseigne}/>
            <EnseigneForm />
        </>
    )
}