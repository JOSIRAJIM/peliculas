import { Layout } from 'antd';
import './Footer.sass';

const Footer = () => {
    const { Footer } = Layout;
    return (
        <Footer className="footer">
            <hr className="hr-divider"></hr>
            <p>🎬 Tu peli </p>
            <hr className="hr-divider"></hr>
        </Footer>
    );
};

export default Footer;