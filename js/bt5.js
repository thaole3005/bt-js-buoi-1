/**
 * Khối 1: Input
 * number
 *
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị: number, chuc, donVi
 * B2: 
 * lấy số hàng chục: chuc = Math.floor(number/10);
 * lấy số đơn vị: donVi =  (number%10);
 * 
 * Khối 3: Output
 * 
 * sum
 * 
 */

 var number = 83;
 var chuc = Math.floor(number / 10);
 var donVi = number % 10;
 var sum = chuc + donVi;
 console.log('BT5-tổng 2 chữ số là: ' + sum)

 

 
