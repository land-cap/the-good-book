import { Icon } from "~/components/atoms/Icon/Icon";
import { Capd } from "~/components/Capped";

export const Footer = () => (
  <footer
    className="flex flex-col gap-6 items-center text-center text-sm text-fgSubtle mx-auto w-full max-w-2xl px-8 my-20 md:my-32">
    <p>
      © Drepturi de autor British and Foreign Bible Society (BFBS) și
      Societatea Biblică Interconfesională din România (SBIR) 1924,&nbsp;2014
      <br />© copyright British and Foreign Bible Society and the
      Interconfessional Bible Society of Romania 1924,&nbsp;2014
    </p>
    <p>
			<span className="inline-flex items-center">
				Made with <Icon name="favorite" className="mx-1 text-sm" /> in Moldova
				by
			</span>{" "}
      {/* @ts-ignore */}
      <Capd
        fontSize="xs"
        {/* @ts-ignore */}
        Component="a"
        children="land-cap"
        href="https://github.com/land-cap"
        target="_blank"
        className="font-bold underline"
      />
    </p>
  </footer>
);
