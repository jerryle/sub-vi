# Đơn vị hành chính Việt Nam

Tìm kiếm và lấy dữ liệu hành chính Việt Nam

> Lấy cảm hứng từ thư viện https://github.com/madnh/hanhchinhvn. Được tạo để sử dụng với Nodejs. Dữ liệu được lấy từ https://www.gso.gov.vn/dmhc2015/ (Cập nhật 06/10/2019)

## Cài đặt

```
$ npm install sub-vi
// OR with yarn
$ yarn add sub-vi
```

## Các hàm hỗ trợ

| Function  | Desciption |
| ------------- | ------------- |
| getAreas() | Lấy danh sách vùng miền |
| getProvinces() | Lấy danh sách tỉnh/thành phố |
| getDistricts() | Lấy danh sách các huyện/quận |
| getWards() | Lấy danh sách các xã/phường |
| getAreasWithDetail() | Lấy danh sách vùng miền (chi tiết) |
| getProvincesWithDetail() | Lấy toàn bộ dữ liệu |
| getProvindByAreaCode(areaCode) | Lấy danh sách tỉnh/tp theo mã vùng miền |
| getDistrictsByProvinceCode(provinceCode) | Lấy danh sách huyện/ quận theo mã tỉnh |
| getWardsByDistrictCode(districtCode) | Lấy danh sách phường/ xã theo mã huyện |
| getWardsByProvinceCode(provinceCode) | Lấy danh sách phường/ xã theo tỉnh |
| getProvinceByProvinceCode(provinceCode) | Lấy thông tin tỉnh/tp theo mã tỉnh |
| getWardByWardCode(wardCode) | Lấy thông tin phường / xã theo mã phường/ xã |
| getDistrictByDistrictCode(districtCode) | Lấy thông tin quận/ huyện theo mã quận/ huyện |

### The MIT License (MIT)

Copyright (c) <2019> Tran Quoc Cuong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
