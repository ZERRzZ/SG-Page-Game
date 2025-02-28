// 4.快速排序 O(n log n)

export const quickSort = (arr: any[], begin: number, end: number) => {
  if (begin >= end) return arr

  let pivot = arr[begin],
    i = begin,
    j = end

  while (i < j) {
    while (arr[j] >= pivot && i < j) {
      j--
    }

    while (arr[i] <= pivot && i < j) {
      i++
    }

    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  ;[arr[begin], arr[i]] = [arr[i], arr[begin]] // 交换基准点和大小分割点

  quickSort(arr, begin, i - 1) // 分治法对剩余分区排序
  quickSort(arr, i + 1, end) // 分治法对剩余分区排序
}
