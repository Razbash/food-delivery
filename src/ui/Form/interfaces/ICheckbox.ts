interface ICheckbox {
    id: string,
    label: string,
    value: boolean,
    setValue: (value: boolean) => void,
}

export default ICheckbox;