function heapify(array, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];

    heapify(array, n, largest);
  }
}

function buildHeap(array, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }
}

function heapSort(array) {
  const n = array.length;

  buildHeap(array, n);

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];

    heapify(array, i, 0);
  }
  console.log(array);
}

const numbers = [23, 24523, 234, 123, 1, -234, 4];
heapSort(numbers);
