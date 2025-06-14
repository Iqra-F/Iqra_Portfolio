import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.png';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.png';
import gamestackTexture from '~/assets/gamestack-login.png';
import sliceTextureLarge from '~/assets/slice-app-large.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.png';
import ChatAPP from '~/assets/chatapp.png';
import Chatbot from '~/assets/Chatbot.png';
import Bookstore from '~/assets/bookstore.jpg';
import Netflix from '~/assets/netflix.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: ' Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
       <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AI Chatbot Template for Educational & Business Websites"
        description="Delivered a reusable AI chatbot template with a sleek UI, smart prompt suggestions, and educational support features — ideal for homework help, customer support, or knowledge bases."
        technologies= "HTML, CSS, JavaScript, OpenAI API"
        buttonText="View Project"
        buttonLink="https://homeworkifyeu.com/app/"
        model={{
          type: 'laptop',
          alt: 'Chatbot',
          textures: [
            {
              srcSet: `${Chatbot} 1280w, ${Chatbot} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Buycex - Cryptocurrency Exchange Platform"
        description="Frontend contribution to an innovative cryptocurrency website in collaboration with the Buycex team, delivering a seamless user interface."
        technologies= "React.js, Tailwind CSS"
        buttonText="View Project"
        buttonLink="https://buycex.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Buycex',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Euphoria – E-Commerce Platform with AI Chatbot and Dashboards"
        description="Co-developed a full-featured e-commerce platform in collaboration with a developer. Highlights include NextAuth authentication, product filtering, grid/list views, AI chatbot for user support, admin and user dashboards, payment gateway, shopping cart, wishlist, and profile editing, showcasing both technical skills and teamwork."
        technologies= "Next.js, MongoDB, Tailwind CSS, Cloudinary"
        buttonText="View project"
        buttonLink="https://euphoria-cloth.vercel.app/men"
        model={{
          type: 'laptop',
          alt: 'Euphoria',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Coffee Chronicles - Modern Coffee Shop Website"
        description="Built a visually appealing and fully responsive coffee shop website with smooth scroll animations. Integrated engaging AOS animations to enhance the user experience."
        technologies= "Next.js, Tailwind CSS, AOS (Animate on Scroll)"
        buttonText="View Project"
        buttonLink="https://iqra-coffee-shop.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Coffee Shop',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
       {/* <ProjectSummary
        id="project-4"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={4}
        title="Netflix - Movie Streaming Website"
        description="Created a responsive movie streaming platform fetching real-time data for the latest movies from an external API. Implemented secure user authentication with Firebase."
        technologies= "React.js, Firebase, Tailwind CSS"
        buttonText="View project"
        buttonLink="https://netflixreactjs-608a0.firebaseapp.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${Netflix} 800w, ${Netflix} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      /> */}
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="VibeChat - Real-Time Chat Application"
        description="Developed a dynamic chat application with real-time messaging using WebSockets. Built a responsive frontend and scalable backend to ensure seamless communication."
        technologies= "React.js, Node.js, Express.js, MongoDB, WebSockets(for message notifications)"
        buttonText="View project"
        buttonLink="https://github.com/Iqra-F/VibeChat-MERN-ChatApp"
        model={{
          type: 'laptop',
          alt: 'VibeChat',
          textures: [
            {
              srcSet: `${ChatAPP} 800w, ${ChatAPP} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Full-Stack Bookstore Application"
        description="Built a comprehensive online bookstore with features to view and manage book categories. Developed a robust backend and user-friendly UI."
        technologies="React.js, Node.js, Express.js, MongoDB, Tailwind CSS"
        buttonText="View project"
        buttonLink="https://github.com/Iqra-F/BookStore-using-MERN-stack"
        model={{
          type: 'laptop',
          alt: 'BookStore',
          textures: [
            {
              srcSet: `${Bookstore} 800w, ${Bookstore} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
