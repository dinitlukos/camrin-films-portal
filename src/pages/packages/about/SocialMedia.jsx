import Grid from '@mui/material/Grid2'
import { FacebookEmbed, InstagramEmbed,PinterestEmbed, YouTubeEmbed } from 'react-social-media-embed';
const SocialMedia = () => {
    return (<Grid container direction="row" spacing={2} alignItems="center" justifyContent="center">
        {/* <Grid size={{xs:12, md:4}}> */}
        {/* <FacebookEmbed url="https://www.facebook.com/camrinfilms/posts/pfbid0yWSxdF5dceNjMkZZgz4tt1Y2J74QKcn24QPkvHGxySgyd2dCg1a57CPF5sRS1YXal" width={325}/> */}

        {/* </Grid> */}
        {/* <Grid size={{xs:12, md:4}}> */}

        <InstagramEmbed url="https://www.instagram.com/camrinfilms/p/Cl8WQpYr0Ip/" width={328} />
        <InstagramEmbed url="https://www.instagram.com/camrinfilms/p/C0eHwQMsc0z/" width={328} />
        <InstagramEmbed url="https://www.instagram.com/camrinfilms/p/CsDrDkmLZwW" width={328} />
        <InstagramEmbed url="https://www.instagram.com/camrinfilms/p/DEXKVeBssNS" width={328} />
        <InstagramEmbed url="https://www.instagram.com/camrinfilms/p/DEXQI6AT9QO" width={328} />

        <YouTubeEmbed url='https://www.youtube.com/shorts/rdNB5Lq-IiM' width={328} height={630}/>
        <YouTubeEmbed url='https://www.youtube.com/shorts/msZ63p2liK0' width={328} height={630}/>
        <YouTubeEmbed url='https://www.youtube.com/shorts/e-DzFXR6TTE' width={328} height={630}/>
        <YouTubeEmbed url='https://www.youtube.com/shorts/3n29zZJTlMQ' width={328} height={630}/>
        <YouTubeEmbed url='https://www.youtube.com/shorts/KQGxLA7qTOU' width={328} height={630}/>

        {/* </Grid> */}
        {/* <Grid size={{xs:12, md:4}}> */}
        <PinterestEmbed url="https://in.pinterest.com/pin/627689266847941117/" width={250} />
        <PinterestEmbed url="https://www.pinterest.com/pin/627689266847284059/" width={250} />
        <PinterestEmbed url="https://www.pinterest.com/pin/627689266797425526/" width={250} />
        <PinterestEmbed url="https://www.pinterest.com/pin/627689266797202449/" width={250} />
        <PinterestEmbed url="https://www.pinterest.com/pin/627689266846280799/" width={250} />
        <PinterestEmbed url="https://www.pinterest.com/pin/627689266846776099/" width={250} />
       

        {/* </Grid> */}
        
    </Grid>)
}

export default SocialMedia