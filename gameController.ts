interface buttonGroup {
    value: number,
    count: number
}

export class GameController {

    buttons: buttonGroup;
    axes: Float32Array;

    map: Map<string, Array<number>>

    constructor( number_of_buttons: number, number_of_axes: number ) {
        this.buttons = { value: 0, count: number_of_buttons };
        this.axes = new Float32Array(number_of_axes);
        this.map = new Map( );
    }

    #hasButton( buttonName: string ) {
        const button = this.map.get(buttonName);
        if(!button) throw `Error - button[${buttonName}] not defined!`;
        return button;
    }

    #setBit( index: number, value: number ) {
        if( value === 0 ) this.buttons.value &= ~Math.pow(2, index);
        else this.buttons.value |=  Math.pow(2, index);
    }

    #parseIndices( indices: Array<number> = [ ] ) {
        indices = indices.map( x => Math.floor( x ));
        for( let i = 0; i < indices.length; i++ )
            if( indices[i] < 0 || indices[i] > this.buttons.count )
                indices.splice( i, 1 );
        return indices;
    }

    setButton( index: number, value: boolean ) {
        const i = value ? 1 : 0;
        this.#setBit( index, i );
    }

    getButton( index: number ) {
        index = Math.floor( index );
        return (this.buttons.value & Math.pow(2, index)) != 0;
    }

    setAxis( index: number, value: number ) {
        this.axes[index] = value;
    }

    labelButtons( buttons: Array<string> ) {
        this.map.clear( );
        for( const buttonName of buttons ) 
            this.map.set(buttonName, []);
    }

    mapButton( buttonName, ...indices: number[]) {
        let button = this.#hasButton( buttonName );
        button = this.#parseIndices( indices );
    }

    press( buttonName: string ) {
        const button = this.#hasButton( buttonName );
        for( const index of button ) this.setButton( index, true );
    }

    release( buttonName: string ) {
        const button = this.#hasButton( buttonName );
        for( const index of button ) this.setButton( index, false );
    }

    isDown( buttonName:string  ) {
        const button = this.#hasButton( buttonName );
        for( const index of button ) 
            if(this.getButton(index)) return true;
        return false;
    }

}