import { httpService } from './http.service'

export const boardService = {
    save,
    getBoardById,
    query,
    saveBoards
}

window.boardService = boardService

async function getBoardById(boardId){
    try{
        return await httpService.get(`board/${boardId}`)
    } catch (err) {
        throw err
    }
}

async function query(userId) {
    try {
        const boards = await httpService.get('board') 
        const filterBoards = boards.filter(board => {
            return board.createdBy._id === userId
        })
        return filterBoards
    } catch (err) {
        throw err
    }
}

async function save(board) {
    if (board._id) {
        try{
            return await httpService.put(`board/${board._id}`,board)
        } catch (err) {
            throw err
        }        
    }else {
        try {
            return await httpService.post('board', board)
        } catch (err) {
            throw err
        }
    }
}

async function saveBoards(board) {
    try {
        return await httpService.post('board', board)
    } catch (err) {
        throw err
    }
}
