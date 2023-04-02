import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { logo, landingImg, bible, torah, church } from "@/assets";
import { LandingSquare } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Primeira Igreja Batista de Beberibe</title>
        <meta
          name="description"
          content="Site da Primeira Igreja Batista de Beberibe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}, ${montserrat.className}`}>
        <header className={styles.header}>
          <Image
            src={logo}
            alt="Primeira Igreja Batista de Beberibe"
            className={styles.logo}
          />

          <div className={styles.headerLinks}>
            <a href="#home">Home</a>
            <a href="#home">Valores</a>
            <a href="#ministerios">Ministérios</a>
            <a href="#dizimar">Dizimar</a>
            <a href="#cultos">Cultos</a>
          </div>
        </header>

        <div className={styles.landingContent} id="home">
          <div>
            <span>Descubra o que Deus pode fazer através de você</span>

            <h1>
              Nossa missão é amar a Deus, amar ao próximo e fazer discípulos!
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptate corporis fugit facere eius inventore, modi
              necessitatibus consectetur consequuntur blanditiis repudiandae
            </p>
          </div>
          <Image
            src={landingImg}
            alt="Pastor Juvenal Roberto"
            className={styles.landingImg}
          />
        </div>

        <div className={styles.landingSquares}>
          <LandingSquare icon={bible} title="Lorem ipsum" text="Lorem ipsum" />
          <LandingSquare
            icon={torah}
            title="Lorem ipsum"
            text="Lorem ipsum"
            delay={0.1}
          />
          <LandingSquare
            icon={church}
            title="Lorem ipsum"
            text="Lorem ipsum"
            delay={0.2}
          />
        </div>
      </main>
    </>
  );
}
