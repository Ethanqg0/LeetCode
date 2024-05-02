function Merge( arrayOne: number[], arrayTwo: number[] ): number[] {
    let array: number[] = [];

    while ( arrayOne.length && arrayTwo.length ) {
        if ( arrayOne[0] < arrayTwo[0] ) {
            array.push( arrayOne[0] );
            arrayOne.shift();
        } else {
            array.push( arrayTwo[0] );
            arrayTwo.shift();
        }
    }

    if ( arrayOne.length ) {
        array = array.concat( arrayOne );
    } else if ( arrayTwo.length ) {
        array = array.concat( arrayTwo );
    }

    return array;
}

function mergeSort( nums1: number[] ): number[] {
    if ( nums1.length === 1 || nums1.length === 0 ) {
        return nums1;
    }

    let arrayOne: number[] = nums1.slice( 0, Math.floor(nums1.length / 2) );
    let arrayTwo: number[] = nums1.slice( Math.floor(nums1.length / 2) );

    arrayOne = mergeSort( arrayOne );
    arrayTwo = mergeSort( arrayTwo );

    return Merge( arrayOne, arrayTwo );
}