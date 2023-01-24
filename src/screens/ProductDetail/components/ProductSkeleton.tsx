import "../productDetail.scss";

const ProductSkeleton = () => {
    return(
        <div className="product-detail product-detail--skeleton">
            <div className="product-detail__wrapper">
                <div className="product-detail__images-gallery">
                    <div className="product-detail__images">
                        <div className="product-detail__image"></div>
                        <div className="product-detail__image"></div>
                        <div className="product-detail__image"></div>
                    </div>
                    <div className="product-detail__main-image"></div>
                </div>
                <div className="product-detail__info">
                    <p className="product-detail__title"></p>
                    <p className="product-detail__description"></p>
                </div>
            </div>
        </div>
    )
}

export default ProductSkeleton;