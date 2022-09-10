interface IOptionsList {
    title: string,
}

interface IOptionsPanelProps {
    options: IOptionsList[];
}

const OptionsPanel = (props: IOptionsPanelProps) => {
    return(
        <div className="options-panel">
            {props.options.map(element => {
                return(
                    <div className="options-panel__item">
                        {element.title}
                    </div>
                )
            })}
        </div>
    )
}

export default OptionsPanel;