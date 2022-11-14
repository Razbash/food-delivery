import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import IReaustorant from "../../interfaces/IReustorant";
import { fetchReustorants } from "../../store/actions/reustorantsActions";
import ReustorantsList from "../ReustorantsList/ReustorantsList";
import noFoundImage from "../../assets/images/noFound.svg";

const SearchResult = () => {
    const {searchParametr} = useParams();
    const dispatch = useAppDispatch();
    const {reustorants} = useAppSelector(state => state.reustorants);
    const [reustorantsList, setReustorantsList] = useState<IReaustorant[]>([]);

    useEffect(() => {
        dispatch(fetchReustorants());

        const arr = reustorants.filter(element => element.name.toLowerCase().includes(String(searchParametr)));
        setReustorantsList(arr);
    }, []);

    return(
        <>
            {reustorantsList.length ? <ReustorantsList list={reustorantsList}/> : <SearchNonResult/>}
        </>
    )
}

const SearchNonResult = () => {
    return(
        <div className="no-found">
            <div className="no-found__wrapper">
                <img src={noFoundImage}
                    alt="No found image"
                    className="no-found__image"
                    width={180}
                    height={180}
                />

                <div className="no-found__info">
                    <h3 className="no-found__title">Nothing was found for your query</h3>
                    <p className="no-found__text">Try to write the name of the restaurant differently or shorten the query. Make sure that the name of the restaurant is spelled correctly</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;