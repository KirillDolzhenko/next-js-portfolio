export enum EnumPosition {
    LEFT=1,
    RIGHT=2
}

export interface IPropsClassName {
    className?: string    
}

export interface IPropsChildren extends IPropsClassName {
    children: React.ReactNode | string
}

export interface IPropsButton extends IPropsChildren {
    handleClick?: () => void
}

export interface IPropsButtonMagic extends IPropsButton{   
    position?: EnumPosition 
    icon?: React.ReactNode,
}


export interface IPropsBentoGridItem extends IPropsClassName {
    id: number,
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    // header?: React.ReactNode;
    // icon?: React.ReactNode;
    img?: string,

    titleClassName?: string,
    imgClassName?: string,
    spareImg?: string,
}

export interface IPropsBentoGrid extends IPropsClassName {
    items: IPropsBentoGridItem[]
}