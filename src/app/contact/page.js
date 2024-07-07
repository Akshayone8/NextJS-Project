import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact Descrption",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          fill
          alt="contact image"
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="FullName" />
          <input type="email" placeholder="Email Address" />
          <input type="number" placeholder="Phone Number (Optional)" />
          <textarea placeholder="Message" cols={30} rows={10}></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
