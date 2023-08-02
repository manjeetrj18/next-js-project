import styles from "../profile.module.css";

export default function UserProfile({ params }: any) {
  return (
    <div className={styles.container}>
      <h1>Your Profile id is {params.id}</h1>
    </div>
  );
}
