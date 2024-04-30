import Button from "./Button";
import GithubLogo from "../assets/github-mark.svg";
import LinkedinLogo from "../assets/linkedin-logo.svg";

export const NavBar = () => {
  return (
    <div className="flex flex-col items-center w-[112px] h-dvh mt-[25px] bg-black">
      <Button className="scale-[0.9]" href="https://github.com/Tech13-08">
        <div className="bg-white rounded-full">
          <GithubLogo className="scale-[1.1]" />
        </div>
      </Button>

      <Button
        className=" scale-[0.1]"
        href="https://www.linkedin.com/in/falak-tulsi/"
      >
        <div className="bg-white rounded-full scale-[8] ">
          <LinkedinLogo className="scale-[1.4]" />
        </div>
      </Button>
    </div>
  );
};
