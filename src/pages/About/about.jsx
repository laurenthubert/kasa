import React from 'react';
import Aboutbanner from '../../assets/aboutbanner.png';
import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/collapse';
import './about.scss';

const aboutSections = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
  },
  {
    title: 'Respect',
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
  },
  {
    title: 'Service',
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question",
  },
  {
    title: 'Sécurité',
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div>
      <Banner image={Aboutbanner} namealt="2emebanner" />
      <div className="aboutCollapse">
        {aboutSections.map((section, index) => (
          <Collapse key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
};

export default About;
