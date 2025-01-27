const areas = require("./json_data/areas");
const provinces = require("./json_data/provinces");
const districts = require("./json_data/districts");
const wards = require("./json_data/wards");
const tree = require("./json_data/tree");
const treeWithArea = require("./json_data/treeWithArea");
module.exports = {
  getAreas: () => areas,
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getAreasWithDetail: () => treeWithArea,
  getProvincesWithDetail: () => tree,
  getProvindByAreaCode: (areaCode) => provinces.filter(x => x.area_code == areaCode),
  getDistrictsByProvinceCode: (provinceCode) => districts.filter(x => x.province_code == provinceCode),
  getWardsByDistrictCode: (districtCode) => wards.filter(x => x.district_code == districtCode),
  getWardsByProvinceCode: (provinceCode) => wards.filter(x => x.province_code == provinceCode),
  getProvinceByProvinceCode: (provinceCode) => provinces.find(x => x.code == provinceCode),
  getWardByWardCode: (wardCode) => wards.find(x => x.code == wardCode),
  getDistrictByDistrictCode: (districtCode) => districts.find(x => x.code == districtCode),
};
