import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    // for id in AnchorLink, convert page to lowercase and remove any whitespaces there using that regex
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink href={`#${lowerCasePage}`} className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300`} onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link