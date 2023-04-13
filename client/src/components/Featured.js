import { Box } from "@mui/material";
import beidoukat2022 from '../img/beidoukat2022.jpg';

const Featured = props => {

    return(<>
        <h4>Featured Cosplay</h4>
        <Box>
            <img style={{height:"350px"}} src={beidoukat2022}/>
        </Box>
    </>

    )
}
export default Featured;