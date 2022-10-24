import { IconSvg, TwitterSvg, YoutubeSvg } from "..";

function Navbar() {
  return (
    <header className="w-screen bg-black-color py-2 text-white-color">
      <nav className="m-auto flex w-9/10 items-center justify-between">
        <div>
          <a href="https://algotest.in/" className="flex items-center gap-4">
            <IconSvg />
            <h1 className="font-medium">AlgoTest</h1>
          </a>
        </div>
        <ul className="flex gap-2">
          <div className="hidden items-center gap-2 semi-lg:flex">
            <li className="flex gap-4 px-4">
              <a href="https://twitter.com/AlgoTest_in">
                <TwitterSvg />
              </a>
              <a href="https://www.youtube.com/channel/UCXzgi7C8cmzy9ovY6JigpUg">
                <YoutubeSvg />
              </a>
            </li>
            <div className="h-5 w-2px bg-separator-color"></div>
            <li className="px-4">Blog</li>
            <div className="h-5 w-2px bg-separator-color"></div>

            <li className="px-4">Live Trade</li>
            <div className="h-5 w-2px bg-separator-color"></div>

            <li className="px-4">Paper Trade</li>
            <div className="h-5 w-2px bg-separator-color"></div>

            <li className="px-4">Portfolios</li>
            <div className="h-5 w-2px bg-separator-color"></div>
          </div>

          <li className="px-4">Hi, User</li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
