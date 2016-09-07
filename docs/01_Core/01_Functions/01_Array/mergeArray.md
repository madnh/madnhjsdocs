---
title: _.M.mergeArray
---

Merge các array vào array đầu tiên

### Tham số
Nhận vào các array. Các item của array từ array thứ 2 sẽ được thêm vào array đầu tiên

### Kết quả trả về
<dl class="dl-horizontal">
    <dt>Array</dt><dd>Mảng đã merge</dd>
</dl>

### Ví dụ
```js
var arr = [1, 2, 3],
arr2 = [4, 5, 6];
_.M.mergeArray(arr, arr2); //[1, 2, 3, 4, 5, 6]
console.log(arr); //[1, 2, 3, 4, 5, 6]
```
