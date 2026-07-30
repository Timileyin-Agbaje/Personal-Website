import Image from "next/image";

export default function Home() {
  return (
        <main className="container">
              <h1 className="heading">Timileyin Agbaje</h1>
              <p className="text">
                  I am a CS undergrad building AI driven products across modern web
                  frameworks, backend systems and cloud infrastructure. Reach out
                  to me to talk Technical Blogs and the latest advancements in AI or anything else.
                  <br />
                  I am active on:
              </p>
              <nav aria-label="Social-Links" className="links">
                  <a className="link" href="https://x.com/timileyinagba" target="_blank" rel="noopener noreferrer">X</a>
                  <a className="link" href="https://www.linkedin.com/in/timileyin-agbaje" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="link" href="https://github.com/Timileyin-Agbaje" target="_blank" rel="noopener noreferrer">Github</a>
                  <a className="link" href="mailto:timi.agbaje.mail@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
              </nav>
              <h2 className="sub-heading">Projects</h2>
              <p className="sub-text">Coming soon...</p>
              <Image width={88} height={100} alt="Projects Under Construction" className="SVG" src="img/building-in-progress-crane-tight.svg" />
      <h2 className="sub-heading">Writing</h2>
        </main>
  );
}
