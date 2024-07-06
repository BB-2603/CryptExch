import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import "./Services.css"; // Import the CSS file for styling

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className={`service-card ${color}`}>
        <div className="icon-container">
            {icon}
        </div>
        <div className="text-container">
            <h3 className="service-title">{title}</h3>
            <p className="service-subtitle">{subtitle}</p>
        </div>
    </div>
);

const Services = () => (
    <div className="services-container">
        <div className="services-content">
            <div className="content-left">
                <h1 className="services-heading">
                    Services that we
                    <br />
                    continue to improve
                </h1>
                <p className="services-description">
                    The best choice for buying and selling your crypto assets, with the
                    various super friendly services we offer
                </p>
            </div>

            <div className="content-right">
                <ServiceCard
                    color="blue"
                    title="Security guarantee"
                    icon={<BsShieldFillCheck fontSize={21} className="icon" />}
                    subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
                />
                <ServiceCard
                    color="purple"
                    title="Best exchange rates"
                    icon={<BiSearchAlt fontSize={21} className="icon" />}
                    subtitle="Get the best exchange rates available. We ensure transparency and efficiency."
                />
                <ServiceCard
                    color="red"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={21} className="icon" />}
                    subtitle="Experience lightning-fast transactions. Our network ensures speed and reliability."
                />
            </div>
        </div>
    </div>
);

export default Services;
