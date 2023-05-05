import NavBar from '../../layouts/header/NavBar'
import { useState, useEffect } from 'react'
import { Redirect } from 'next/dist/lib/load-custom-routes'
import Router from 'next/router'
import cookie from '../api/cookieSplitter'
import PressingCard from '../../components/PressingCard'
import { Container } from '@mui/system'
import { Grid, Button } from '@mui/material'
import Pressing from '../api/PressingApi'
import Style from '../../styles/Client.module.css'
import BlogCard from '@/components/dashboard/BlogCard'
import pressing from '../admin/pressing'
import Card from '@/components/commande'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuItem from '@mui/material/MenuItem';

import Toast from '@/components/Toast'
const Client = () => {
    const [data, setData] = useState()
    const [pressings, setPressings] = useState([])
    const [i, setI] = useState(0)
    const [filter, setFilter] = useState("")
    const getPressings = Pressing.getPressing

    getPressings(setPressings)
    console.log(pressings)
    const handleResult = (result) => {
        setData(result)

    }
    if (typeof window !== 'undefined') {
        const url = "http://localhost:3001/clients/" + localStorage.getItem('userId')
        const config =
        {
            method: 'GET',
            headers:
            {
                'Authorization': localStorage.getItem('token')
            }
        };

        useEffect(() => {

            fetch(url, config)
                .then(response => response ? response.status === (401) ? Router.push('./login') : response.json() : console.log('erreur'))
                .then(result => handleResult(result[0]))
        }, [])

    }
    const [openCard, setOpenCard] = useState(false)
    const [selectedPressing, SetselectedPressing] = useState({})
    const [search, setSearch] = useState('')
    console.log(filter)
    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const handleSearchChange=(event)=>{
        setSearch(event.target.value)
    }

    // setOpenCard(true)


    return (
        <>
            <br />
            <Grid sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="filtre"
                    onChange={handleChange}
                >
                    <MenuItem value='localisation'>Localisation</MenuItem>
                    <MenuItem value='enseigne'>Enseigne</MenuItem>
                    <MenuItem value='note'>Note</MenuItem>
                </Select>
                <Autocomplete
                    sx={{
                        width: "90%"
                    }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    
                    options={pressings.map((option) => filter === 'localisation' ? option.localisation : filter === 'note' ? option.note : option.enseigne)}
                    renderInput={(params) => (
                        <TextField
                        value={search}
                            {...params}
                            label={<SearchTwoToneIcon />}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                            onChange={handleSearchChange}
                        />
                    )}
                />
            </Grid>

            <br />
            <Grid container>
                {!openCard ? pressings.map((pressing) =>
                (
                    filter === 'localisation' ?
                        pressing.localisation === search ?
                            <Grid

                                item
                                xs={12}
                                lg={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "stretch",
                                }}
                                key={pressing.id.toString()}
                            >
                                <PressingCard id={pressing.id} enseigne={pressing.enseigne} localisation={pressing.localisation} note={pressing.note} setEntry={SetselectedPressing} setAction={setOpenCard} action={openCard} />
                            </Grid> : console.log('rien pour le moment') : filter === 'enseigne' ?
                            pressing.enseigne === search ?
                                <Grid

                                    item
                                    xs={12}
                                    lg={4}
                                    sx={{
                                        display: "flex",
                                        alignItems: "stretch",
                                    }}
                                    key={pressing.id.toString()}
                                >
                                    <PressingCard id={pressing.id} enseigne={pressing.enseigne} localisation={pressing.localisation} note={pressing.note} setEntry={SetselectedPressing} setAction={setOpenCard} action={openCard} />
                                </Grid> : console.log('rien pour le moment') : filter === 'note' ?
                                pressing.note === search ?
                                    <Grid

                                        item
                                        xs={12}
                                        lg={4}
                                        sx={{
                                            display: "flex",
                                            alignItems: "stretch",
                                        }}
                                        key={pressing.id.toString()}
                                    >
                                        <PressingCard id={pressing.id} enseigne={pressing.enseigne} localisation={pressing.localisation} note={pressing.note} setEntry={SetselectedPressing} setAction={setOpenCard} action={openCard} />
                                    </Grid> : console.log('rien pour le moment'):
                                      <Grid

                                      item
                                      xs={12}
                                      lg={4}
                                      sx={{
                                          display: "flex",
                                          alignItems: "stretch",
                                      }}
                                      key={pressing.id.toString()}
                                  >
                                      <PressingCard id={pressing.id} enseigne={pressing.enseigne} localisation={pressing.localisation} note={pressing.note} setEntry={SetselectedPressing} setAction={setOpenCard} action={openCard} />
                                  </Grid>
                     
                )
                ) : <Card pressing={selectedPressing} setOpenCard={setOpenCard} />}

            </Grid>

            {/* <Container className={Style.PressingContainer}>
           {pressings.map((pressings) => 
                (
                    <Grid container spacing={5}>
                        <PressingCard tarification='pas encore' pressingImage={pressings.logo} pressingLocation={pressings.localisation} pressingName={pressings.enseigne} nomber_avis='0' note={pressings.note} />
                    </Grid>
                ))
            }
                
                
           </Container> */}


        </>
    )

}
export default Client
