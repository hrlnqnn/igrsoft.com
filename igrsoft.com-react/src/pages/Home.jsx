import { Intro } from 'components/Intro/Intro';
import { Badge } from 'components/Badge/Badge';
import { About } from 'components/About/About';
import { Service } from 'components/Service/Service';
import { Gallery } from 'components/Gallery/Gallery'

export const Home = () => {
    return (
        <div >
            <Intro />
            <About />
            <Badge />
            <Service />
            <Gallery />
        </div>
    )
}

