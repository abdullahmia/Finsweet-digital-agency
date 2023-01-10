import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../ui/Footer';
import Navigation from '../ui/header/Navigation';

const Layout = ({ children, title }) => {
    useEffect(() => {
        document.title = title
    }, [title])

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <>
            {/* <Header /> */}

            <Navigation />
            {children}
            <Footer />
        </>
    )
}

export default Layout;