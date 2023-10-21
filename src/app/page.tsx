import  "./index.css";
import {css} from "styled-system/css";

export default function Home() {
  return (
    <main >
     <button className={css({ fontSize: "2xl", fontWeight: 'black', color: 'red.500' })}>Hi.</button>
    </main>
  );
}
