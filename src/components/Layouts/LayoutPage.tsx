import './layoutPage.scss';

const LayoutPage = ({children}:any) => {
    return(
        <>
            <div className="">Тут будет шапка</div>
            <div className="container">
                {children}
            </div>
            <div className="">Тут будет футер</div>
        </>
    )
}

export default LayoutPage;