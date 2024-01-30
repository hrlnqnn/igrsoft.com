import { Outlet } from 'react-router-dom';
import { ScrollButton } from 'components/ScrollButton/ScrollButton';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollButton />
            <Footer />
        </>
    )
}

