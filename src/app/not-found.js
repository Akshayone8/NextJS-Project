import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found </h1>
      <p>The Page Your are Looking for does not exist.</p>
      <Link href="/">Return To HomePage</Link>
    </div>
  );
};

export default NotFound;
