(function (Scratch) {
    'use strict';
  
    // Define the extension metadata
    const extension = {
        id: 'randomNumber',
        name: 'Random Number Generator',
        blocks: [
            {
                opcode: 'getRandomNumber',
                blockType: Scratch.BlockType.REPORTER,
                text: 'random number from [MIN] to [MAX]',
                arguments: {
                    MIN: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    },
                    MAX: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 10
                    }
                }
            }
        ]
    };

    // Define the block functionality
    class RandomNumberExtension {
        getRandomNumber({ MIN, MAX }) {
            const min = Math.min(MIN, MAX);
            const max = Math.max(MIN, MAX);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    // Register the extension
    Scratch.extensions.register(new RandomNumberExtension(), extension);
})(Scratch);
