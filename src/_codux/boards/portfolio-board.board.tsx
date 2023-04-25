import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Portfolio Board',
    Board: () => <div></div>,
    environmentProps: {
        windowWidth: 486
    }
});
