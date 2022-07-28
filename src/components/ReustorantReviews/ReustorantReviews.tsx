import StarIcon from "../../assets/icons/StarIcon";
import HandIcon from "../../assets/icons/HandIcon";
import milesImage from "../../assets/images/users/miles.png";
import jacobImage from "../../assets/images/users/jacob.png";
import IReview from "../../interfaces/IReview";

const ReustorantReviews = () => {
    const reviews:Array<IReview> = [
        {
            id: 0,
            userName: "Savannah Miles",
            estimation: 5,
            date: "10 days ago",
            review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
            likes: 14,
            dislikes: 4,
            image: milesImage
        },
        {
            id: 1,
            userName: "Jacob Jones",
            estimation: 4,
            date: "1 day ago",
            review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
            likes: 14,
            dislikes: 4,
            image: jacobImage
        }
    ];

    return(
        <div className="reustorant-reviews">
            <h5 className="reustorant-reviews__label">Reviews</h5>

            <div className="reustorant-reviews__wrapper">
                <div className="reustorant-reviews__header">
                    <div className="reustorant-reviews__rating-total">
                        <span className="reustorant-reviews__overall-rating-label">
                            Overall rating
                        </span>
                        <div className="reustorant-reviews__rating-statictic">
                            <span className="reustorant-reviews__average-score">4.2</span>
                            <div className="reustorant-reviews__stars">
                                <StarIcon fill={true}/>
                                <StarIcon fill={true}/>
                                <StarIcon fill={true}/>
                                <StarIcon fill={true}/>
                                <StarIcon fill={false}/>
                            </div>
                            <span className="reustorant-reviews__count-votes">
                                3 votes
                            </span>
                        </div>
                    </div>
                    <button className="button">Leave review</button>
                </div>
                <select className="reustorant-reviews__sort selectbox">
                    <option>Sort by: Newest first</option>
                    <option>Sort by: Newest last</option>
                    <option>Sort by: From the best</option>
                    <option>Sort by: From the worst</option>
                </select>
                <div className="reustorant-reviews__list">
                    {reviews.map(element => {
                        const {id, userName, estimation, date, review, likes, dislikes, image} = element;

                        return(
                            <div className="reustorant-reviews__list-item" key={id}>
                                <img src={image}
                                    alt={userName}
                                    className="reustorant-reviews__user-image"
                                    width={36}
                                    height={36}
                                />

                                <div className="reustorant-reviews__review-info">
                                    <span className="reustorant-reviews__user-name">
                                        {userName}
                                    </span>
                                    <div className="reustorant-reviews__user-estimation">
                                        <StarIcon fill={true}/>
                                        <StarIcon fill={true}/>
                                        <StarIcon fill={true}/>
                                        <StarIcon fill={true}/>
                                        <StarIcon fill={false}/>

                                        <span className="reustorant-reviews__date-publication">
                                            {date}
                                        </span>
                                    </div>
                                    <div className="reustorant-reviews__text">
                                        {review}
                                    </div>
                                    <div className="reustorant-reviews__likes-and-dislikes">
                                        <div className="reustorant-reviews__likes">
                                            <div className="reustorant-reviews__likes-icon">
                                                <HandIcon/>
                                            </div>
                                            <span className="reustorant-reviews__likes-count">
                                                {likes}
                                            </span>
                                        </div>
                                        <div className="reustorant-reviews__dislikes">
                                            <div className="reustorant-reviews__dislikes-icon">
                                                <HandIcon/>
                                            </div>
                                            <span className="reustorant-reviews__dislikes-count">
                                                {dislikes}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ReustorantReviews;