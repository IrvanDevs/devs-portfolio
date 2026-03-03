// fontawesome
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

// profile pic
import profilePicture from '../assets/profile.webp';

export const aboutMe = {
  name: 'Irvan.',
  role: 'Frontend Developer.',
  description: 'I build responsive and scalable websites with React, turning design concepts into structured, maintainable frontend code while ensuring usability and consistent user experience across devices.',
  socials: [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/irvandevs/'},
    { icon: faSquareGithub, link: 'https://github.com/irvandevs'},
    { icon: faSquareInstagram, link: 'https://www.instagram.com/irvandevs/'},
  ],
  profilePicture: profilePicture,

};