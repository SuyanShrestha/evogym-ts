import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // for id in AnchorLink, convert page to lowercase and remove any whitespaces there using that regex
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300 cursor-pointer`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
