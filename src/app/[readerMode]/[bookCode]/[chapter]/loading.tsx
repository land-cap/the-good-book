import { center } from 'styled-system/patterns'

const Loading = () => (
	<div
		className={center({
			gridColumn: 'content',
			h: 'calc(100dvh - token(spacing.14) - token(spacing.14))',
		})}
	>
		<style>
			{`
				.loader {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  display: block;
  margin: 1rem auto;
  position: relative;
  color: #FFF;
  left: -4.5rem;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(0,0,0,0), 0px 0 rgba(0,0,0,0), 0px 0 rgba(0,0,0,0), 0px 0 rgba(0,0,0,0);
  }
  12% {
    box-shadow: 5rem 0 var(--colors-fg-faded), 0px 0 rgba(0,0,0,0), 0px 0 rgba(0,0,0,0), 0px 0 rgba(0,0,0,0);
  }
  25% {
    box-shadow: 6rem 0 var(--colors-fg-faded), 100px 0 var(--colors-fg-faded), 0px 0 rgba(0,0,0,0), 0px 0 rgba(0,0,0,0);
  }
  36% {
    box-shadow: 7rem 0 var(--colors-fg-faded), 110px 0 var(--colors-fg-faded), 100px 0 var(--colors-fg-faded), 0px 0 rgba(0,0,0,0);
  }
  50% {
    box-shadow: 8rem 0 var(--colors-fg-faded), 120px 0 var(--colors-fg-faded), 110px 0 var(--colors-fg-faded), 100px 0 var(--colors-fg-faded);
  }
  62% {
    box-shadow: 9rem 0 rgba(0,0,0,0), 130px 0 var(--colors-fg-faded), 120px 0 var(--colors-fg-faded), 110px 0 var(--colors-fg-faded);
  }
  75% {
    box-shadow: 9rem 0 rgba(0,0,0,0), 200px 0 rgba(0,0,0,0), 130px 0 var(--colors-fg-faded), 120px 0 var(--colors-fg-faded);
  }
  87% {
    box-shadow: 9rem 0 rgba(0,0,0,0), 200px 0 rgba(0,0,0,0), 200px 0 rgba(0,0,0,0), 130px 0 var(--colors-fg-faded);
  }
  100% {
    box-shadow: 9rem 0 rgba(0,0,0,0), 200px 0 rgba(0,0,0,0), 200px 0 rgba(0,0,0,0), 200px 0 rgba(0,0,0,0);
  }
}
				`}
		</style>
		<span className="loader"></span>
	</div>
)

export default Loading
