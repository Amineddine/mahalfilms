import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { IncentiveSection } from '../components/IncentiveSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { SEO } from '../components/SEO';

export const Home = () => {
    return (
        <>
            <SEO
                title="Production Services in Morocco"
                description="Mahal Films provides complete professional and logistical support for international and local productions in Morocco. Your trusted partner for feature films, TV series, and commercials."
            />
            <Hero
                videoSrc="/Escape from Mogadishu _ UK Trailer _ 2022 _ Real life escape thriller.mp4"
                title={<>Production Services <br /><span className="text-gradient">in Morocco</span></>}
                subtitle="Complete professional & logistical support for international and local productions. We bring your vision to life."
                showActions={true}
            />
            <TrustSection />
            <IncentiveSection />
            <FeaturedProjects />
        </>
    );
};
