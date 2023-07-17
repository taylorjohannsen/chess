export interface TileType {
    color: string;
    location: string;
    piece: {
        icon: string;
        player?: string;
        rules: string; // placeholder
    } | null;
}

const lightTile = '#EEEED2';
const darkTile = '#769656';
export const selectedTileColor = '#F7F769';

export const initialChessArray: TileType[] = [
    {
        color: lightTile,
        location: 'a8',
        piece: {
            icon: 'br.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'b8',
        piece: {
            icon: 'bn.svg',
            rules: '',
            player: 'black',
        }
    }, {
        color: lightTile,
        location: 'c8',
        piece: {
            icon: 'bb.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'd8',
        piece: {
            icon: 'bq.svg',
            rules: '',
            player: 'black',
        }
    }, {
        color: lightTile,
        location: 'e8',
        piece: {
            icon: 'bk.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'f8',
        piece: {
            icon: 'bb.svg',
            rules: '',
            player: 'black',
        }
    }, {
        color: lightTile,
        location: 'g8',
        piece: {
            icon: 'bn.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'h8',
        piece: {
            icon: 'br.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'a7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    }, {
        color: lightTile,
        location: 'b7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'c7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    }, {
        color: lightTile,
        location: 'd7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'e7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    }, {
        color: lightTile,
        location: 'f7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: darkTile,
        location: 'g7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: lightTile,
        location: 'h7',
        piece: {
            icon: 'bp.svg',
            rules: '',
            player: 'black',
        }
    },
    {
        color: lightTile,
        location: 'a6',
        piece: null,
    },
    {
        color: darkTile,
        location: 'b6',
        piece: null,
    }, {
        color: lightTile,
        location: 'c6',
        piece: null,
    },
    {
        color: darkTile,
        location: 'd6',
        piece: null,
    }, {
        color: lightTile,
        location: 'e6',
        piece: null,
    },
    {
        color: darkTile,
        location: 'f6',
        piece: null,
    }, {
        color: lightTile,
        location: 'g6',
        piece: null,
    },
    {
        color: darkTile,
        location: 'h6',
        piece: null,
    },
    {
        color: darkTile,
        location: 'a5',
        piece: null
    }, {
        color: lightTile,
        location: 'b5',
        piece: null,
    },
    {
        color: darkTile,
        location: 'c5',
        piece: null
    }, {
        color: lightTile,
        location: 'd5',
        piece: null
    },
    {
        color: darkTile,
        location: 'e5',
        piece: null
    }, {
        color: lightTile,
        location: 'f5',
        piece: null
    },
    {
        color: darkTile,
        location: 'g5',
        piece: null
    },
    {
        color: lightTile,
        location: 'h5',
        piece: null
    },
    {
        color: lightTile,
        location: 'a4',
        piece: null
    },
    {
        color: darkTile,
        location: 'b4',
        piece: null
    }, {
        color: lightTile,
        location: 'c4',
        piece: null
    },
    {
        color: darkTile,
        location: 'd4',
        piece: null
    }, {
        color: lightTile,
        location: 'e4',
        piece: null
    },
    {
        color: darkTile,
        location: 'f4',
        piece: null
    }, {
        color: lightTile,
        location: 'g4',
        piece: null
    },
    {
        color: darkTile,
        location: 'h4',
        piece: null
    },
    {
        color: darkTile,
        location: 'a3',
        piece: null
    }, {
        color: lightTile,
        location: 'b3',
        piece: null
    },
    {
        color: darkTile,
        location: 'c3',
        piece: null
    }, {
        color: lightTile,
        location: 'd3',
        piece: null
    },
    {
        color: darkTile,
        location: 'e3',
        piece: null
    }, {
        color: lightTile,
        location: 'f3',
        piece: null
    },
    {
        color: darkTile,
        location: 'g3',
        piece: null
    },
    {
        color: lightTile,
        location: 'h3',
        piece: null
    },
    {
        color: lightTile,
        location: 'a2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'b2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    }, {
        color: lightTile,
        location: 'c2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'd2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    }, {
        color: lightTile,
        location: 'e2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'f2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    }, {
        color: lightTile,
        location: 'g2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'h2',
        piece: {
            icon: 'wp.svg',
            rules: '',
            player: 'white',
        }
    },

    {
        color: darkTile,
        location: 'a1',
        piece: {
            icon: 'wr.svg',
            rules: '',
            player: 'white',
        }
    }, {
        color: lightTile,
        location: 'b1',
        piece: {
            icon: 'wn.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'c1',
        piece: {
            icon: 'wb.svg',
            rules: '',
            player: 'white',
        }
    }, {
        color: lightTile,
        location: 'd1',
        piece: {
            icon: 'wq.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'e1',
        piece: {
            icon: 'wk.svg',
            rules: '',
            player: 'white',
        }
    }, {
        color: lightTile,
        location: 'f1',
        piece: {
            icon: 'wb.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: darkTile,
        location: 'g1',
        piece: {
            icon: 'wn.svg',
            rules: '',
            player: 'white',
        }
    },
    {
        color: lightTile,
        location: 'h1',
        piece: {
            icon: 'wr.svg',
            rules: '',
            player: 'white',
        }
    },
]