interface ICategoriesListItemProps {
    id: number
    title: string,
    icon: string,
    size?: string,
    onSetFilters?: (filterId: number) => void,
}

export default ICategoriesListItemProps;