import { TileType, initialChessArray, selectedTileColor } from '../util/constants';
import { BoardContainer, TileContainer, PieceIcon, Turn } from './Board.styled';
import { useCallback, useEffect, useState } from 'react';

const Board = () => {
  const [selectedTile, updateSelectedTile] = useState<TileType | null>(null);
  const [chessArray, updateChessArray] = useState<TileType[]>(initialChessArray);
  const [playerTurn, updatePlayerTurn] = useState<string>('white');

  const handleTileClick = useCallback((tile: TileType) => {
    if (tile.piece?.player !== playerTurn && !selectedTile?.piece) return; // handling turns

    if (selectedTile?.piece) {
      const newChessArray: TileType[] = JSON.parse(JSON.stringify(chessArray));
      const oldSelectedTile = newChessArray.find(oldSelected => selectedTile.location === oldSelected.location);
      const newSelectedTile = newChessArray.find(newSelected => tile.location === newSelected.location);

      if (oldSelectedTile && newSelectedTile && (oldSelectedTile.location !== newSelectedTile.location)) {
        newSelectedTile.piece = oldSelectedTile.piece;
        oldSelectedTile.piece = null;
      }

      updateChessArray(newChessArray);
      updatePlayerTurn(selectedTile.piece?.player === 'white' ? 'black' : 'white')
      updateSelectedTile(null);
    } else if (tile.piece) {
      updateSelectedTile(tile)
    }
  }, [selectedTile, chessArray, playerTurn, updateSelectedTile, updateChessArray])

  const renderBoard = useCallback(() => {
    const tileArray: JSX.Element[] = [];

    chessArray.forEach(tile => {
      const { color, location, piece } = tile;
      const isSelected = selectedTile?.location === location;

      tileArray.push(
        <TileContainer onClick={() => handleTileClick(tile)} data-location={location} $bg={isSelected ? selectedTileColor : color} key={location} $cursor={!!piece}>
          {piece && <PieceIcon draggable={false} src={`${process.env.PUBLIC_URL}/icons/${piece.icon}`} />}
        </TileContainer>
      )
    })

    return tileArray;
  }, [chessArray, selectedTile, handleTileClick]);

  const [chessBoard, updateChessBoard] = useState<JSX.Element[]>(renderBoard());

  useEffect(() => {
    console.log('Re-rendering board')
    updateChessBoard(renderBoard());
  }, [selectedTile, chessArray, updateChessBoard, renderBoard])

  return (
    <>
      <Turn>Player Turn: {playerTurn}</Turn>
      <BoardContainer>
        {chessBoard}
      </BoardContainer>
    </>
  );
}

export default Board;


// might need right click support to cancel click on piece