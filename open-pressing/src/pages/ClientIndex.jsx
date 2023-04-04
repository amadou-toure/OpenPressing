import PressingCard from '../components/PressingCard'
export default function(){
    // const config = {
    //     method: 'GET',
    //     headers: {
    //         'Authorization':document.cookie
    //     }
    //     };
    // fetch("http://localhost:3001/clients/",config)
    // .then(response=> response ? console.log(response.json()):console.log('erreur'))

    // console.log(document.cookie)
    return(
        <>
            <div>
                <PressingCard pressingDescription='' pressingImage='' pressingName='American pressing' />
               <PressingCard pressingImage='' pressingName='Elegance Pressing' pressingDescription='Votre satisfaction, notre mission' />
            </div>
        </>
    )
}