const state={
    groups:localStorage["groups"]?JSON.parse(localStorage["groups"]): [{id: 0, name: 'Uncategorized', todos: []}],
}

export default state