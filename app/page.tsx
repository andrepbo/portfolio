import {
  FooterCopyRight,
  Footer,
  HeroButton,
  HeroButtons,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  HomeContent,
  MainSection,
  MainSectionProject,
  MainSectionProjects,
  HeroImage,
} from "@/components";
import { getGithubData, getSocialMedia } from "@/util";
import Script from "next/script";

export default async function Home() {
  const gitHub = await getGithubData();

  return (
    <main className="home">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <HomeContent>
        <HeroContent>
          <HeroImage filename={`${gitHub[0].profilePictureUrl}`} />
          <HeroTitle text="Software Engineer and Tech Lead" />
          <HeroSubtitle text="Discover my work and projects on GitHub" />
          <HeroButtons>
            {getSocialMedia.map(({ name, link, icon: Icon }) => (
              <HeroButton key={name} href={link} icon={<Icon />}>
                {name}
              </HeroButton>
            ))}
          </HeroButtons>
        </HeroContent>
        <MainSection
          title="Latest Work"
          description=" I have experience in a number of different areas. Have a look at what
          I'm working on right now"
        />
        <MainSectionProjects>
          {gitHub.map(({ id, name, description, html_url, topics }) => (
            <MainSectionProject
              key={id}
              description={description === null ? name : description}
              html_url={html_url}
              topics={topics}
            />
          ))}
        </MainSectionProjects>
        <Footer>
          <FooterCopyRight />
        </Footer>
      </HomeContent>
    </main>
  );
}
