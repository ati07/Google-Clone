import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import Response from '../response'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function SearachPage() {
    const [{ term = true }, dispatch] = useStateValue()

    // Live API CALL
    const {data} =useGoogleSearch(term)

    //Mock API CALL
    // const data = Response

    //https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
    //https://cse.google.com/cse/create/new

    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />

                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/Images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>

                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">

                                <Link to="/setting">Setting</Link>
                            </div>
                            <div className="searchPage__option">

                                <Link to="/tools">tools</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results
                         {data?.searchInformation.formattedSearchTime} seconds
                         for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src && (
                                    <img 
                                     className="searchPage__resultImage"
                                     src={
                                         item.pagemap?.cse_image?.length > 0 &&
                                         item.pagemap?.cse_image[0]?.src
                                     }
                                     alt="Image"
                                    />
                                )}
                                {item.displayLink}▽
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__ resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SearachPage