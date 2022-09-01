import StarIcon from "../../assets/icons/StarIcon";
import HandIcon from "../../assets/icons/HandIcon";
import IReustorantReviews from "../../interfaces/IReustorantReviews";

interface IReustorantReviewsProps {
    reviews: IReustorantReviews[]
}

const ReustorantReviews = (props: IReustorantReviewsProps) => {
    const {reviews} = props;
    const countVotes = reviews.length;

    const calculateOverallRating = () => (reviews.reduce((sum, item) => Number(sum) + Number(item.estimate), 0) / reviews.length).toFixed(1);

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
                            <span className="reustorant-reviews__average-score">{calculateOverallRating()}</span>
                            <div className="reustorant-reviews__stars">
                                <StarIcon fill={true}/>
                                <StarIcon fill={true}/>
                                <StarIcon fill={true}/>
                                <StarIcon fill={true}/>
                                <StarIcon fill={false}/>
                            </div>
                            <span className="reustorant-reviews__count-votes">{countVotes} votes</span>
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
                        const {id, userName, userImage, dateOfPublication, estimate, feedback, likes, dislikes} = element;

                        return(
                            <div className="reustorant-reviews__list-item" key={id}>
                                <img src={userImage}
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
                                            {dateOfPublication}
                                        </span>
                                    </div>
                                    <div className="reustorant-reviews__text">
                                        {feedback}
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