import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
// import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="2" as="p">
    I’m a Full Stack Developer with a track record of building real-world web applications, SaaS platforms, dashboards, and AI-powered tools that solve real business problems. I’ve successfully collaborated with clients, teams, and companies—often through freelance and contract projects—to deliver clean, scalable, and results-driven solutions. <br/> 
   </Text>
    <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
      <DecoderText text=" My stack (frontend and backend):" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="2" as="p">

    ‣ 𝙁𝙧𝙤𝙣𝙩𝙚𝙣𝙙 –
 React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI, Chakra UI, Shadcn/UI, Redux, Figma-to-Code conversions
 <br/>
 ‣ 𝘽𝙖𝙘𝙠𝙚𝙣𝙙 –
 Node.js, Express.js, MongoDB, Firebase, Supabase, Prisma, Mongoose, SQL, REST APIs, JWT Auth, WebSockets, and Payment Integrations (Stripe, PayPal, Razorpay)
<br/>
‣ 𝘼𝙄 & 𝙊𝙩𝙝𝙚𝙧𝙨 –
 AI App Integration (OpenAI/ChatGPT), Git, GitHub, Vercel
  </Text>   
 <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
      <DecoderText text=" What I’ve Built:" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="2" as="p">
 ‣ AI-integrated e-commerce platforms with secure auth and payments<br/>

 ‣ Custom dashboards with role-based access<br/>
 ‣ Real-time chat and booking applications and landing pages<br/>
 ‣ SaaS products and custom API-driven tools <br/>
 ‣ Figma-to-Code conversions 
   <br/>
📩 Feel free to reach out if you are looking to collaborate or need a reliable developer for your next project.  
</Text> 
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Iqra Fatima Developer"
                />
                {/* <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
