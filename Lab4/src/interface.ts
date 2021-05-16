export interface INoteKeepData {
    main: {
        name: string,
        id: number,
        timeadd: Date,
        timeedit: Date,
        ispinned: boolean,
        text: string,
    }
    color: {
        red: number,
        green: number,
        blue: number,
    }

}
