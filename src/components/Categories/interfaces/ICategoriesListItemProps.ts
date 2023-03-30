interface ICategoriesListItemProps {
    id: number
    title: string,
    icon: string,
    onSetFilters?: (filterId: number) => void,
}

export default ICategoriesListItemProps;