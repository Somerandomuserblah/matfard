
namespace matStuff {
    //%block
    export function matrixInverseFixed(in1: Array<4>, in2: Array<4>, in3: Array<4>, in4: Array<4>): Array<Array<int32>> {
    
        let mRow1: number[] = []
        let mRow2: number[] = []
        let mRow3: number[] = []
        let mRow4: number[] = []
        let aRow1: number[] = []
        let aRow2: number[] = []
        let aRow3: number[] = []
        let aRow4: number[] = []
        let det = 0
       
        mRow1 = [
            2,
            1,
            -1,
            0
        ]
        mRow2 = [
            2,
            6,
            5,
            0
        ]
        mRow3 = [
            5,
            6,
            7,
            0
        ]
        mRow4 = [
            3,
            5,
            1,
            1
        ]
        aRow1 = [
            2,
            1,
            -1,
            0
        ]
        aRow2 = [
            2,
            6,
            5,
            0
        ]
        aRow3 = [
            5,
            6,
            7,
            0
        ]
        aRow4 = [
            3,
            5,
            1,
            1
        ]
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
