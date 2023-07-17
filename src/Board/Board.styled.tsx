import { styled } from 'styled-components';

export const BoardContainer = styled('div')`
   display: flex;
   flex-direction: row;
   color: white;
   background-color: green;
   height: 1000px;
   width: 1000px;
   flex-wrap: wrap;
   border: 1px solid black;
   font-family: Roboto;
`;

export const TileContainer = styled('div')<{ $bg: string, $cursor: boolean }>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 125px;
   min-width: 125px;
   background-color: ${(props) => props.$bg};
   color: black;
   cursor: ${(props) => props.$cursor ? 'pointer' : 'default'};
`;

export const PieceIcon = styled('img')`
   height: 115px;
   width: auto;
   user-select: none;
`;

export const Turn = styled('div')`
   color: white;
   margin-bottom: 0.5rem;
`