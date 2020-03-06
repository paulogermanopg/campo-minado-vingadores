import Field from "./components/Field"

const createBoeard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
                joia: false,
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted ++
        }
    }
}

const createMineBoard = (rows, columns, minesAmount) => {
    const board = createBoeard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

const clonedBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row +1]
    const columns = [column - 1, column, column +1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (different && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board)
.filter(field => field.exploded).length > 0
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)
const wonGame = board => fields(board).filter(pendding).length === 0
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) field.flagged = !field.flagged
}

const joia = (board, row, column) => {
    const field = board[row][column]
    if (field.opened) {
        const neighbors = getNeighbors(board, row, column)
        field.nearMines = neighbors.filter(n => n.mined).length
        if (field.nearMines > 0){
            if (field.joia == false){
                const joia1 = fields(board).filter(field => field.joia && field.nearMines == 1).length
                const joia2 = fields(board).filter(field => field.joia && field.nearMines == 2).length
                const joia3 = fields(board).filter(field => field.joia && field.nearMines == 3).length
                const joia4 = fields(board).filter(field => field.joia && field.nearMines == 4).length
                const joia5 = fields(board).filter(field => field.joia && field.nearMines == 5).length
                const joia6 = fields(board).filter(field => field.joia && field.nearMines >= 6).length
                if (field.nearMines == 1 && joia1 < 3){
                    field.joia = !field.joia
                    const marcar = neighbors.filter(n => n.mined)
                    marcar[0].flagged = true
                    
                }
                else if (field.nearMines == 2 && joia2 < 2){
                    field.joia = !field.joia
                    const marcar = neighbors.filter(n => n.mined)
                    marcar[0].flagged = true
                    marcar[1].flagged = true
                }
                else if (field.nearMines == 3 && joia3 == 0){
                    field.joia = !field.joia
                    const marcar = neighbors.filter(n => n.mined)
                    marcar[0].flagged = true
                    marcar[1].flagged = true
                    marcar[2].flagged = true
                    let m = marcar.length
                    while (m > 0) {
                        marcar[m-1].mined = false
                        m -- 
                    }
                }
                else if (field.nearMines == 4 && joia4 == 0){
                    field.joia = !field.joia
                    const marcar = neighbors.filter(n => n.mined)
                    marcar[0].flagged = true
                    marcar[1].flagged = true
                    marcar[2].flagged = true
                    marcar[3].flagged = true
                    const marcar_1 = neighbors.filter(n => n.nearMines > 0)
                    let m = marcar_1.length
                    while (m > 0) {
                        marcar_1[m-1].joia = false
                        m -- 
                    }
                }
                else if (field.nearMines == 5 && joia5 == 0){
                    field.joia = !field.joia
                    const marcar = neighbors.filter(n => n.mined)
                    marcar[0].flagged = true
                    marcar[1].flagged = true
                    marcar[2].flagged = true
                    marcar[3].flagged = true
                    marcar[4].flagged = true
                    const marcar_1 = neighbors.filter(n => n.nearMines > 0)
                    let m = marcar_1.length
                    while (m > 0) {
                        marcar_1[m-1].opened = false
                        m -- 
                    }
                }
                else if (field.nearMines >= 6 && joia6 == 0){
                    field.joia = !field.joia
                    const marcar = neighbors.filter(n => n.mined)
                    marcar[0].flagged = true
                    marcar[1].flagged = true
                    marcar[2].flagged = true
                    marcar[3].flagged = true
                    marcar[4].flagged = true
                    // marcar[5].flagged = true
                    let m = marcar.length
                    while (m > 0) {
                        if (marcar[m-1].flagged == false)
                        marcar[m-1].mined = false
                        m -- 
                    }
                }
                else{}
            }
            
        }
    }
}

const wonGameByJoia = board => {
    const joia1 = fields(board).filter(field => field.joia && field.nearMines == 1).length
    const joia2 = fields(board).filter(field => field.joia && field.nearMines == 2).length
    const joia3 = fields(board).filter(field => field.joia && field.nearMines == 3).length
    const joia4 = fields(board).filter(field => field.joia && field.nearMines == 4).length
    const joia5 = fields(board).filter(field => field.joia && field.nearMines == 5).length
    const joia6 = fields(board).filter(field => field.joia && field.nearMines >= 6).length
    if (joia1 > 0 && joia2 > 0 && joia3 > 0 && joia4 > 0 && joia5 > 0 && joia6 > 0) {
        return true
    }
}

const flagsUsed = board => fields(board).filter(field => field.flagged).length

export { 
    createMineBoard,
    clonedBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed,
    joia,
    wonGameByJoia,
}