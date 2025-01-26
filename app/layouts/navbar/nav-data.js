import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Mail',
    url: `mailto:iqraf683@gmail.com`,
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    url: ` https://www.linkedin.com/in/iqra-fatima-290903286/`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
