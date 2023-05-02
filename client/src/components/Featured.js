import { Box, Card } from "@mui/material";
import beidoukat2022 from '../img/beidoukat2022.jpg';

const Featured = props => {

    return(
    <div style={{margin:"5px"}}>
        <Card style={{borderRadius:"20%", backgroundColor:"lightblue"}}>
        <h4>Featured Cosplay</h4>
            <img style={{maxWidth:"50%", margin:"5px", borderRadius:"20%"}} alt="Kat cosplaying" src={beidoukat2022}/>
        </Card>
    </div>

    )
}
export default Featured;