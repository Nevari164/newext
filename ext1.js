class TimeExtension {
    getInfo() {
        return {
            id: 'timeExtension',
            name: 'Time Extension',
            blocks: [
                {
                    opcode: 'getCurrentTime',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'current time'
                }
            ]
        };
    }

    getCurrentTime() {
        const date = new Date();
        return date.toLocaleTimeString();
    }
}

Scratch.extensions.register(new TimeExtension());
