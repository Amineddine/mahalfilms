import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { IncentiveSection } from '../components/IncentiveSection';
import { FeaturedProjects } from '../components/FeaturedProjects';

export const Home = () => {
    return (
        <>
            <Hero
                videoSrc="/Escape from Mogadishu _ UK Trailer _ 2022 _ Real life escape thriller.mp4"
                title={<>Production Services <br /><span className="text-gradient">in Morocco</span></>}
                subtitle={<>Your premier partner for film production in Morocco.<br />Votre partenaire privilégié pour le tournage et la production cinématographique au Maroc.</>}
                showActions={true}
            />
            <TrustSection />
            <IncentiveSection />
            <FeaturedProjects />
        </>
    );
};
