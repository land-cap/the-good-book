import './index.css';
import { css } from 'styled-system/css';

export default function Home() {
  return (
    <main>
      <h1
        className={css({
          fontSize: '2xl',
          fontWeight: 'black',
          color: 'red.500',
        })}
      >
        Hi. I am The Good Book.
      </h1>
    </main>
  );
}
