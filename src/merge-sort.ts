/**
 * 배열을 반으로 나누어 부분 배열로 만든다. 배열의 길이가 1이 되면 멈춘다
 * @param 배열
 */
const 배열_나누기 = (배열: number[] = []): any => {
    if (배열.length <= 1) {
        return 배열
    }

    const 중간_인덱스 = Math.floor(배열.length / 2)
    const 왼쪽배열 = 배열.slice(0, 중간_인덱스)
    const 오른쪽배열 = 배열.slice(중간_인덱스)

    return 병합하며_정렬하기(배열_나누기(왼쪽배열), 배열_나누기(오른쪽배열))
}

/**
 * 부분 배열을 정렬하면서 병합한다
 * @param 왼쪽배열
 * @param 오른쪽배열
 */
const 병합하며_정렬하기 = (왼쪽배열: number[], 오른쪽배열: number[]) => {
    const 결과배열: number[] = []

    /**
     * 왼쪽배열과 오른쪽배열이 쌍을 이룬다면
     */
    while (왼쪽배열?.length >= 1 && 오른쪽배열?.length >= 1) {
        const [왼쪽배열_첫번째_값] = 왼쪽배열
        const [오른쪽배열_첫번째_값] = 오른쪽배열

        if (왼쪽배열_첫번째_값 > 오른쪽배열_첫번째_값) {
            결과배열.push(오른쪽배열.shift() as number)
        } else {
            결과배열.push(왼쪽배열.shift() as number)
        }
    }

    /**
     * 왼쪽배열에만 값이 있다면
     */
    while (왼쪽배열?.length >= 1) {
        결과배열.push(왼쪽배열.shift() as number)
    }

    /**
     * 오른쪽배열에만 값이 있다면
     */
    while (오른쪽배열?.length >= 1) {
        결과배열.push(오른쪽배열.shift() as number)
    }

    return 결과배열
}

/**
 * 1. 배열을 반으로 나누어 부분 배열로 만든다. 배열의 길이가 1이 되면 멈춘다
 * 2. 부분 배열을 정렬하면서 병합한다
 * @param 배열
 */
const 병합정렬 = (배열: number[] = []) => {
    return 배열_나누기(배열)
}
const 데이터_배열3 = [9, 8, 7, 1, 2, 5, 6, 3, 4]
console.log(병합정렬(데이터_배열3))