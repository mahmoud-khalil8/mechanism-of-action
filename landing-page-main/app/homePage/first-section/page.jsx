"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const FirstSection = () => {
  return (
    <div className={styles.background}>
    <section className={styles.sectionContainer}>

      <div className="container mx-auto text-center">
        <div className={styles.heading}>
          From Insight to Impact: Harnessing Machine Learning for Discovery
        </div>

        <p className={styles.paragraph}>
          Welcome to our exploration of drug mechanisms of action (MoA),
        </p>
        <p className={styles.paragraph}>
          where understanding how a drug works is crucial for its therapeutic
        </p>
        <p className={styles.paragraph}>
          effectiveness and impact on healthcare.
        </p>

        <div className={styles.buttonContainer}>
          <Link href="../../Prediction">
            <button className={`${styles.button} ${styles.blueButton}`}>
              Get Started
            </button>
          </Link>
          <Link href="../../overview">
            <button className={`${styles.button} ${styles.grayButton}`}>
              Learn More
            </button>
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <div>
            <Image
              className={styles.image}
              src="/images/first.jpg"
              width={400}
              height={400}
              alt="logo"
            />
          </div>

          <div>
            <Image
              className={styles.image}
              src="/images/second.jpg"
              width={400}
              height={400}
              alt="logo"
            />
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default FirstSection;