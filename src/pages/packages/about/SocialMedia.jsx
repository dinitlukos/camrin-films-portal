import Grid from '@mui/material/Grid2'
import { FacebookEmbed, InstagramEmbed,PinterestEmbed } from 'react-social-media-embed';
const SocialMedia = () => {
    return (<Grid container direction="row" spacing={2}>
        {/* <Grid size={{xs:12, md:4}}> */}
        <FacebookEmbed url="https://www.facebook.com/camrinfilms/posts/pfbid0yWSxdF5dceNjMkZZgz4tt1Y2J74QKcn24QPkvHGxySgyd2dCg1a57CPF5sRS1YXal" width={325}/>

        {/* </Grid> */}
        {/* <Grid size={{xs:12, md:4}}> */}
        <InstagramEmbed url="https://www.instagram.com/camrinfilms/p/C0eHwQMsc0z/" width={300}/>

        {/* </Grid> */}
        {/* <Grid size={{xs:12, md:4}}> */}
        <PinterestEmbed url="https://in.pinterest.com/pin/627689266847941117/" width={300}/>

        {/* </Grid> */}
        
    </Grid>)
}

export default SocialMedia