let out1: number[] = []
let out2: number[] = []
let out3: number[] = []
let det = 0
let aRow4: number[] = []
let aRow3: number[] = []
let aRow2: number[] = []
let aRow1: number[] = []
let mRow1 = [
0,
0,
0,
0
]
let mRow2 = [
0,
0,
0,
0
]
let mRow3 = [
0,
0,
0,
0
]
let mRow4 = [
0,
0,
0,
0
]
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

    //%block
    export function multMat(inA1: Array<int32>, inA2: Array<int32>, inA3: Array<int32>, inB1: Array<int32>, inB2: Array<int32>, inB3: Array<int32>): Array<Array<int32>> {
        /*
        let inA3: number[] = []
        let inA2: number[] = []
        let inB3: number[] = []
        let inB2: number[] = []
        let inB1: number[] = []
        let inA1: number[] = []
        */
        out1 = [0, 0, 0]
        out2 = [0, 0, 0]
        out3 = [0, 0, 0]
        out1[0] = inA1[0] * inB1[0] + inA1[1] * inB2[0] + inA1[2] * inB3[0]
        out1[1] = inA1[0] * inB1[1] + inA1[1] * inB2[1] + inA1[2] * inB3[1]
        out1[2] = inA1[0] * inB1[2] + inA1[1] * inB2[2] + inA1[2] * inB3[2]
        out2[0] = inA2[0] * inB1[0] + inA2[1] * inB2[0] + inA2[2] * inB3[0]
        out2[1] = inA2[0] * inB1[1] + inA2[1] * inB2[1] + inA2[2] * inB3[1]
        out2[2] = inA2[0] * inB1[2] + inA2[1] * inB2[2] + inA2[2] * inB3[2]
        out3[0] = inA3[0] * inB1[0] + inA3[1] * inB2[0] + inA3[2] * inB3[0]
        out3[1] = inA3[0] * inB1[1] + inA3[1] * inB2[1] + inA3[2] * inB3[1]
        out3[2] = inA3[0] * inB1[2] + inA3[1] * inB2[2] + inA3[2] * inB3[2]
        return [
            out1,
            out2,
            out3,
        ];
    }

}
