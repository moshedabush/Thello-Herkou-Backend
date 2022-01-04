import React from "react";
import { connect } from "react-redux";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { onSaveBoards } from '../store/board.actions';
import {SidePopUp} from '../cmps/SidePopUp'
import { ReactComponent as StarIcon } from "../assets/img/star-icon.svg";

class _BoardSecondHeader extends React.Component {

    state = {
        isSidePopUpOpen:false
    }

    toggleSidePopUp = ()=> {
        console.log('im here');
        const {isSidePopUpOpen} = this.state
        this.setState({isSidePopUpOpen:!isSidePopUpOpen})  
    }
    onToggleFavorite = (ev, boardId) => {
        ev.preventDefault()
        const { boards,onSaveBoards } = this.props
        const board = boards.find(board => board._id === boardId)
        board.isFavorite = !board.isFavorite
        onSaveBoards(boards);
      };
    
    render() {
        const {title,board} = this.props
        const {isSidePopUpOpen} = this.state
        return (
            <section className="board-second-wrapper flex justify-space-between">
                <div className="left-nav">
                        <span className="board-title">{title}</span>
                        <span className={`board-star ${board.isFavorite ? 'favorite' : ''}`}
                        onClick={(ev)=> {this.onToggleFavorite(ev,board._id)}}
                        ><StarIcon/></span>
                </div>
                <div className="board-second-container">
                    <a className="btn-show-menu" onClick={(ev)=> {this.toggleSidePopUp(ev)}}>
                        <span className="header-icon"><MoreHorizIcon/></span>
                        <span className="btn-text">Show Menu</span>
                        
                    </a>
                    {isSidePopUpOpen && <SidePopUp/> } 
                </div>
            </section>
        )

    }

}

function mapStateToProps(state) {
    return {
        board: state.boardModule.board,
        boards: state.boardModule.boards,
    };
}

const mapDispatchToProps = {
    onSaveBoards,
    // loadBoard,
};

export const BoardSecondHeader = connect(mapStateToProps, mapDispatchToProps)(_BoardSecondHeader);
