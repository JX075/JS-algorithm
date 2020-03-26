## JS十大排序算法

![](.\images\js_sort_arithmetic.png)

****



### 冒泡排序（Bubble Sort）

#### 1.算法步骤

比较相邻的元素。如果第一个比第二个大，就交换他们两个。

对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

针对所有的元素重复以上的步骤，除了最后一个。

持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

#### 2、JS代码

```js
function bubbleSort(array) {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - 1 - i; j++) {
                    if (array[j] > array[j + 1]) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
```

****



### 选择排序（Selection Sort）

#### 1.算法步骤

首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。

再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

重复第二步，直到所有元素均排序完毕。

#### 2.JS代码

```js
function slectionSort(array) {
            var minIndex, temp;
            for (let i = 0; i < array.length - 1; i++) {
                minIndex = i;
                for (let j = i + 1; j < array.length; j++) {
                    if (array[j] < array[minIndex]) {    //寻找最小的数
                        minIndex = j;					//将最小数的索引保存
                    }
                }
                temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
            return array;
        }
```

****



### 插入排序（Insertion Sort）

><font color="red">适用于： </font>
>
><font color="red">1、数据规模小 ；</font>
>
><font color="red">2、数据基本有序 </font>

#### 1.算法步骤

将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

#### 2.JS代码

```js
function InsertSort(array) {
            var preIndex, current;
            for (let i = 1; i < array.length; i++) {
                preIndex = i - 1;
                current = array[i];
                //将current的值与前面有序数组比较，然后插入
                while (preIndex >= 0 && current < array[preIndex]) {
                    array[preIndex + 1] = array[preIndex];
                    preIndex--;
                }
                array[preIndex + 1] = current;
            }
            return array;
        }
```

**优化：折半插入排序**——利用折半查找

```js
function InsertSort2(array) {
            var j, middle, low, heigh;
            var temp;
            for (let i = 1; i < array.length; i++) {
                temp = array[i]; //待插入数
                low = 0;
                heigh = i - 1;
                //折半查找应该插入的位置
                while (low <= heigh) {
                    middle = Math.floor((low + heigh) / 2);
                    if (temp >= array[middle]) {
                        low = middle + 1;
                    } else {
                        heigh = middle - 1;
                    }
                }
                //确定位置后将数插入
                //为temp腾出位置
                for (j = i - 1; j > heigh; j--) {
                    array[j + 1] = array[j];
                }
                array[j + 1] = temp;
            }
            return array;
        }
```



### 希尔排序

#### 1. 算法步骤

选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；

按增量序列个数 k，对序列进行 k 趟排序；

每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

原理推荐参考：[希尔排序](https://blog.csdn.net/qq_39207948/article/details/80006224)

> <font color="black">Knuth序列：(间隔序列)</font>
>
> <font color="black">· h=1</font>
>
> <font color="black">· h=3*h+1</font>
>
> <font color="black">· h < 数组长/3</font>

#### 2. JS算法

```js
function shellSort(array) {
            var gap = 1;
            var temp;
            // 确定步长
            while (gap < array.length / 3) {
                gap = 3 * gap + 1;
            }
            for (gap; gap >= 1; gap = Math.floor((gap / 3))) {
                for (let i = gap; i < array.length; i++) {
                    temp = array[i];
                    for (var j = i - gap; j >= 0 && temp < array[j]; j -= gap) {
                        array[j + gap] = array[j];
                    }
                    array[j + gap] = temp;
                }
            }
    		return array;
        }
```

***



### 归并排序（Merge Sort）

归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。

作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：

- 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
- 自下而上的迭代；

#### 1. 算法步骤

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
4. 重复步骤 3 直到某一指针达到序列尾；
5. 将另一序列剩下的所有元素直接复制到合并序列尾。

#### 2.JS算法

`自上而下递归`

```js
function mergeSort(array) { //自上而下递归
            if (array.length < 2) {
                return array;
            }

            var middle = Math.floor(array.length / 2);
            var left = array.slice(0, middle);
            var right = array.slice(middle);
            return merge(mergeSort(left), mergeSort(right));
}
        // 排序部分
function merge(left, right) {
            var result = [];
            while (left.length && right.length) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
            while (left.length) {
                result.push(left.shift());
            }
            while (right.length) {
                result.push(right.shift());
            }
            return result;
}
```

`自上而下迭代`

```js
function mergeSort(array) {
            var i, next, left_min, left_max, right_min, right_max;
            var temp = new Array(array.length);
            //i：步长。逐级上升，第一次比较2个，第二次比较4个，第三次比较8个。。。
            for (i = 1; i < array.length; i *= 2) {
                //每次都从0开始，数组的头元素开始  
                for (left_min = 0; left_min < array.length - i; left_min = right_max) {
                    right_min = left_max = left_min + i;
                    right_max = right_min + i;
                    //right_max最大到n，防止越界
                    if (right_max > array.length) {
                        right_max = array.length;
                    }
                    //next是用来标志temp数组下标的，由于每次数据都有返回到K，  
                    //故每次开始得重新置零 
                    next = 0;
                    //如果左边的数据还没达到分割线且右边的数组没到达分割线，开始循环 
                    while (left_min < left_max && right_min < right_max) {
                        if (array[left_min] < array[right_min]) {
                            temp[next++] = array[left_min++];
                        } else {
                            temp[next++] = array[right_min++];
                        }
                    }
                    //如果左侧有剩余，将剩余的拼到右侧
                    while (left_min < left_max) {
                        array[--right_min] = array[--left_max];
                    }
                    while (next > 0) {
                        array[--right_min] = temp[--next];
                    }
                }

            }
            return array;
        }
```



***



### 快速排序



#### 1. 算法步骤

> 1. 从数列中挑出一个元素，称为 "基准"（pivot）;
> 2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
> 3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

#### 2. JS算法

```js
//快速排序
//找中轴（分区）
//从右往左，右边赋值到左边；
//从左往右，左边赋值到右边；
//找中轴过程中，保证对于两个指针left和right，在它们相遇时，left左边的都比基准值小，right右边的都比基准值大
function quickSort(arr, left, right) {
     //可选
     //var left = typeof left != 'number' ? 0 : left,
     //   right = typeof right != 'number' ? len - 1 : right;
     if (left < right) {
         var index = partition(arr, left, right);
         quickSort(arr, left, index - 1);
         quickSort(arr, index + 1, right);
     }
}

function partition(arr, left, right) {
            var pivot = arr[left];
            while (left < right) {
                while (arr[right] >= pivot && left < right) {
                    right--;
                }
                arr[left] = arr[right];
                while (arr[left] <= pivot && left < right) {
                    left++;
                }
                arr[right] = arr[left];
            }
            arr[left] = pivot;
            return left;
        }        
```



***



### 堆排序(Heap Sort)

#### 1.算法说明

> - 堆--特点
>
>   1.完全二叉树（从上至下，从左至右依次生成节点）；
>
>   2.父节点值大于（小于）等于子节点值；
>
> - 完全二叉树父子节点位置计算：
>
>   某节点在数组中下标为i，那么：
>
>   parent= (i-1)/2;
>
>   c1=2i+1;
>
>   c2=2i+2;
>
> - heapify：调整堆——让父节点最大（或最小）
>
> 堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：
>
> 1. 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于`升序`排列
> 2. 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于`降序`排列

#### 2.升序步骤

> 1. 创建一个堆 H[0……n-1]；
> 2. 把堆首（最大值）和堆尾互换；
> 3. 把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；
> 4. 重复步骤 2，直到堆的尺寸为 1。

#### 3.JS算法

```js
//堆排序
//数值交换
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
//heapify操作
function heapifty(arr, n, i) {
    var c1 = 2 * i + 1,
        c2 = 2 * i + 2,
        max = i;
    if (c1 < n && arr[max] < arr[c1]) {
        max = c1;
    }
    if (c2 < n && arr[max] < arr[c2]) {
        max = c2;
    }
    if (max != i) {
        swap(arr, max, i);
        heapifty(arr, n, max);//调整经改动的那个节点
    }
}
//建立大顶堆
function build_heap(arr, n) {
    for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
        heapifty(arr, n, i);
    }
}
//排序
function heapSort(arr) {
    build_heap(arr, arr.length);//构建堆
    var length = arr.length;
    for (let i = length - 1; i > 0; i--) {
        swap(arr, i, 0);  //将堆首与堆尾互换，让最大的值到堆尾部；
        length--; // 将堆尾切掉
        heapifty(arr, length, 0); //再对堆进行heapify操作，让剩余最大值上浮到0号节点
    }
}
```



***

<font color="red">非比较排序</font>

### 计数排序（Counting Sort）

#### 1.算法说明

> 适用情况：量大但数据范围小.
>
> 核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。

#### 2.JS算法

```js
function countingSort(arr, maxValue) {
            var bucket = new Array(maxValue + 1),
                sortedIndex = 0;

            for (let i = 0; i < arr.length; i++) {
                if (!bucket[arr[i]]) { //如果bucket[arr[i]为非大于等于0的数字，就将它初始化为0
                    bucket[arr[i]] = 0;
                }
                bucket[arr[i]]++;
            }
            //将排序后的数返还到原数组
            for (let j = 0; j < maxValue + 1; j++) {
                while (bucket[j]-- > 0) {
                    arr[sortedIndex++] = j;
                }
            }

        }
//该算法存在以下问题：
//1.原数组值必须在0~maxvalue之间，无法做到在随机范围内的数组进行排序（比如有负值）；
//2.如果数据离散型较高，会造成空间浪费
```

