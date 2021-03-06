import classes from "../../../styles/post-header.module.css";
import Image from "next/image";

const PostHeader = ({ title, image }) => {
  console.log("image", image);
  return (
    <header className={classes.header}>
      <h1 className={classes.hea}> {title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
