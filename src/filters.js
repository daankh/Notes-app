const filters = {
    searchText: '',
    sortBy: 'last edited'
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if (typeof updates.sortBy === 'string') {
        filters.sortBy = updates.sortBy
    }
}

export { getFilters, setFilters }