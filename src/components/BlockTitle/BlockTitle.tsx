import IBlockTitle from "./interfaces/IBlockTitle";
import './blockTitle.scss';

const BlockTitle = ({text}: IBlockTitle) => {
    return(
        <h5 className="block-title">{text}</h5>
    )
}

export default BlockTitle;