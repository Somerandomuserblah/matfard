
let mRow1 = [
1,
5,
5,
2
]
let mRow2 = [
5,
6,
2,
8
]
let mRow3 = [
2,
6,
9,
5
]
let mRow4 = [
4,
5,
1,
2
]
let aRow1: number[] = []
let aRow2: number[] = []
let aRow3: number[] = []
let aRow4: number[] = []
let det = 0;
namespace matStuff {
    //%block
    export function matrixInverseFixed(in1: Array<int32>, in2: Array<int32>, in3: Array<int32>, in4: Array<int32>): Array<Array<int32>> {

        mRow1 = in1;
        mRow2 = in2;
        mRow3 = in3;
        mRow4 = in4;

        
        det = mRow1[0] * mRow2[1] * mRow3[2] * mRow4[3] + mRow1[0] * mRow2[2] * mRow3[3] * mRow4[1] + mRow1[0] * mRow2[3] * mRow3[1] * mRow4[2] - mRow1[0] * mRow2[3] * mRow3[2] * mRow4[1] - mRow1[0] * mRow2[2] * mRow3[1] * mRow4[3] - mRow1[0] * mRow2[1] * mRow3[3] * mRow4[2] - mRow1[1] * mRow2[0] * mRow3[2] * mRow4[3] - mRow1[2] * mRow2[0] * mRow3[3] * mRow4[1] - mRow1[3] * mRow2[0] * mRow3[1] * mRow4[2] + mRow1[3] * mRow2[0] * mRow3[2] * mRow4[1] + mRow1[2] * mRow2[0] * mRow3[1] * mRow4[3] + mRow1[1] * mRow2[0] * mRow3[3] * mRow4[2] + mRow1[1] * mRow2[2] * mRow3[0] * mRow4[3] + mRow1[2] * mRow2[3] * mRow3[0] * mRow4[1] + mRow1[3] * mRow2[1] * mRow3[0] * mRow4[2] - mRow1[3] * mRow2[2] * mRow3[0] * mRow4[1] - mRow1[2] * mRow2[1] * mRow3[0] * mRow4[3] - mRow1[1] * mRow2[3] * mRow3[0] * mRow4[2] - mRow1[1] * mRow2[2] * mRow3[3] * mRow4[0] - mRow1[2] * mRow2[3] * mRow3[1] * mRow4[0] - mRow1[3] * mRow2[1] * mRow3[2] * mRow4[0] + mRow1[3] * mRow2[2] * mRow3[1] * mRow4[0] + mRow1[2] * mRow2[1] * mRow3[3] * mRow4[0] + mRow1[1] * mRow2[3] * mRow3[2] * mRow4[0]
        aRow1[0] = (mRow2[1] * mRow3[2] * mRow4[3] + mRow2[2] * mRow3[3] * mRow4[1] + mRow2[3] * mRow3[1] * mRow4[2] - mRow2[3] * mRow3[2] * mRow4[1] - mRow2[2] * mRow3[1] * mRow4[3] - mRow2[1] * mRow3[3] * mRow4[2]) / det
        aRow1[1] = ((0 - mRow1[1]) * mRow3[2] * mRow4[3] - mRow1[2] * mRow3[3] * mRow4[1] - mRow1[3] * mRow3[1] * mRow4[2] + mRow1[3] * mRow3[2] * mRow4[1] + mRow1[2] * mRow3[1] * mRow4[3] + mRow1[1] * mRow3[3] * mRow4[2]) / det
        aRow1[2] = (mRow1[1] * mRow2[2] * mRow4[3] + mRow1[2] * mRow2[3] * mRow4[1] + mRow1[3] * mRow2[1] * mRow4[2] - mRow1[3] * mRow2[2] * mRow4[1] - mRow1[2] * mRow2[1] * mRow4[3] - mRow1[1] * mRow2[3] * mRow4[2]) / det
        aRow1[3] = ((0 - mRow1[1]) * mRow2[2] * mRow3[3] - mRow1[2] * mRow2[3] * mRow3[1] - mRow1[3] * mRow2[1] * mRow3[2] + mRow1[3] * mRow2[2] * mRow3[1] + mRow1[2] * mRow2[1] * mRow3[3] + mRow1[1] * mRow2[3] * mRow3[2]) / det
        aRow2[0] = ((0 - mRow2[0]) * mRow3[2] * mRow4[3] - mRow2[2] * mRow3[3] * mRow4[0] - mRow2[3] * mRow3[0] * mRow4[2] + mRow2[3] * mRow3[2] * mRow4[0] + mRow2[2] * mRow3[0] * mRow4[3] + mRow2[0] * mRow3[3] * mRow4[2]) / det
        aRow2[1] = (mRow1[0] * mRow3[2] * mRow4[3] + mRow1[2] * mRow3[3] * mRow4[0] + mRow1[3] * mRow3[0] * mRow4[2] - mRow1[3] * mRow3[2] * mRow4[0] - mRow1[2] * mRow3[0] * mRow4[3] - mRow1[0] * mRow3[3] * mRow4[2]) / det
        aRow2[2] = ((0 - mRow1[0]) * mRow2[2] * mRow4[3] - mRow1[2] * mRow2[3] * mRow4[0] - mRow1[3] * mRow2[0] * mRow4[2] + mRow1[3] * mRow2[2] * mRow4[0] + mRow1[2] * mRow2[0] * mRow4[3] + mRow1[0] * mRow2[3] * mRow4[2]) / det
        aRow2[3] = (mRow1[0] * mRow2[2] * mRow3[3] + mRow1[2] * mRow2[3] * mRow3[0] + mRow1[3] * mRow2[0] * mRow3[2] - mRow1[3] * mRow2[2] * mRow3[0] - mRow1[2] * mRow2[0] * mRow3[3] - mRow1[0] * mRow2[3] * mRow3[2]) / det
        aRow3[0] = (mRow2[0] * mRow3[1] * mRow4[3] + mRow2[1] * mRow3[3] * mRow4[0] + mRow2[3] * mRow3[0] * mRow4[1] - mRow2[3] * mRow3[1] * mRow4[0] - mRow2[1] * mRow3[0] * mRow4[3] - mRow2[0] * mRow3[3] * mRow4[1]) / det
        aRow3[1] = ((0 - mRow1[0]) * mRow3[1] * mRow4[3] - mRow1[1] * mRow3[3] * mRow4[0] - mRow1[3] * mRow3[0] * mRow4[1] + mRow1[3] * mRow3[1] * mRow4[0] + mRow1[1] * mRow3[0] * mRow4[3] + mRow1[0] * mRow3[3] * mRow4[1]) / det
        aRow3[2] = (mRow1[0] * mRow2[1] * mRow4[3] + mRow1[1] * mRow2[3] * mRow4[0] + mRow1[3] * mRow2[0] * mRow4[1] - mRow1[3] * mRow2[1] * mRow4[0] - mRow1[1] * mRow2[0] * mRow4[3] - mRow1[0] * mRow2[3] * mRow4[1]) / det
        aRow3[3] = ((0 - mRow1[0]) * mRow2[1] * mRow3[3] - mRow1[1] * mRow2[3] * mRow3[0] - mRow1[3] * mRow2[0] * mRow3[1] + mRow1[3] * mRow2[1] * mRow3[0] + mRow1[1] * mRow2[0] * mRow3[3] + mRow1[0] * mRow2[3] * mRow3[1]) / det
        aRow4[0] = ((0 - mRow2[0]) * mRow3[1] * mRow4[2] - mRow2[1] * mRow3[2] * mRow4[0] - mRow2[2] * mRow3[0] * mRow4[1] + mRow2[2] * mRow3[1] * mRow4[0] + mRow2[1] * mRow3[0] * mRow4[2] + mRow2[0] * mRow3[2] * mRow4[1]) / det
        aRow4[1] = (mRow1[0] * mRow3[1] * mRow4[2] + mRow1[1] * mRow3[2] * mRow4[0] + mRow1[2] * mRow3[0] * mRow4[1] - mRow1[2] * mRow3[1] * mRow4[0] - mRow1[1] * mRow3[0] * mRow4[2] - mRow1[0] * mRow3[2] * mRow4[1]) / det
        aRow4[2] = ((0 - mRow1[0]) * mRow2[1] * mRow4[2] - mRow1[1] * mRow2[2] * mRow4[0] - mRow1[2] * mRow2[0] * mRow4[1] + mRow1[2] * mRow2[1] * mRow4[0] + mRow1[1] * mRow2[0] * mRow4[2] + mRow1[0] * mRow2[2] * mRow4[1]) / det
        aRow4[3] = (mRow1[0] * mRow2[1] * mRow3[2] + mRow1[1] * mRow2[2] * mRow3[0] + mRow1[2] * mRow2[0] * mRow3[1] - mRow1[2] * mRow2[1] * mRow3[0] - mRow1[1] * mRow2[0] * mRow3[2] - mRow1[0] * mRow2[2] * mRow3[1]) / det
        return [
            aRow1,
            aRow2,
            aRow3,
            aRow4
        ];

    }
}
