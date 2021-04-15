import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX} from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/client'

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Lucas Melo
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"
      onClick={() => signIn('github')} />
      Sign in with Github
    </button>
  );
}
