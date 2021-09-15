import MidSection from './MidSection';
import OurStory from './OurStory'
import Payment from './Payment'
import AppDetails from './AppDetails';
import ComingSoon from './ComingSoon';
import SubscribeInfo from './SubcribeInfo';

function Body() {
    return(
        <>
            <MidSection />
            <OurStory />
            <hr />
            <Payment />
            <hr />
            <AppDetails />
            <hr />
            <ComingSoon />
            <SubscribeInfo />
        </>
    )
}

export default Body;