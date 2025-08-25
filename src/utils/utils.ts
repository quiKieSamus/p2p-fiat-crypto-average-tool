export function getMaxOfElements(arr: number[]): number | undefined {
    return arr.sort((a, b) => a - b).at(arr.length - 1);
}

export function getMinOfElements(arr: number[]): number | undefined {
    return arr.sort((a, b) => a - b).at(0);
}