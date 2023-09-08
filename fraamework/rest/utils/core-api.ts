import request from "./request";

export class CoreApi {
  http = request;

  constructor(public _base_path: string) {}

  findAllGet(url: any) {
    return this.http.get(url);
  }

  findAllPost(url: string, data: any) {
    return this.http.post(url, data);
  }

  findAllDelete(url: string, data: any) {
    return this.http.delete(url, data);
  }

  // private stringifySearchQuery(values: any) {
  //   const parsedValues = pickBy(values);

  //   return Object.keys(parsedValues).map((k) => {
  //       if (k === 'type') {
  //         return `${k}.slug:${parsedValues[k]};`;
  //       }
  //       if (k === 'category') {
  //         return `categories.slug:${parsedValues[k]};`;
  //       }
  //       if (k === 'tags') {
  //         return `tags.slug:${parsedValues[k]};`;
  //       }
  //       if (k === 'variations') {
  //         return `variations.value:${parsedValues[k]};`;
  //       }
  //       return `${k}:${parsedValues[k]};`;
  //     }).join('').slice(0, -1);
  // }

  // find(params: ParamsType) {
  //   const { type, text: name, category,tags,variations,status,is_active,shop_id,
  //     limit = 30,sortedBy="DESC",orderBy="created_at",min_price,max_price } = params;
  //   const searchString = this.stringifySearchQuery({ type, name,category,tags,variations,status,
  //     shop_id,is_active,min_price,max_price});
  //   const queryString = `?search=${searchString}&searchJoin=and&limit=${limit}&sortedBy=${sortedBy}&orderBy=${orderBy}`;
  //   return this.http.get(this._base_path + queryString);
  // }

  // findAll() {
  //   return this.http.get(this._base_path);
  // }

  // fetchUrl(url: string) {
  //   return this.http.get(url);
  // }

  // postUrl(url: string, data: any) {
  //   return this.http.post(url, data);
  // }

  // findOne(id: NumberOrString) {
  //   return this.http.get(`${this._base_path}/${id}`);
  // }

  // findPost(id:any,value:any){

  // }

  // // findOne(id: NumberOrString) {

  // //   return this.http1.get(`api/v1/products/details/${id}`);
  // // }

  // findAllInfos(url :any) {
  //   return this.http1.get(url);
  // }

  // findAllPut(url: string, data: any) {
  //   return this.http1.put(url, data);
  // }

  // create(data: any, options?: any) {
  //   return this.http.post(this._base_path, data, options).then((res) => res.data);
  // }

  // update(id: NumberOrString, data: any) {
  //   return this.http.put(`${this._base_path}/${id}`, data).then((res) => res.data);
  // }

  // // delete(id: NumberOrString) {
  // //   return this.http.delete(`${this._base_path}/${id}`);
  // // }

  // deleteInfo(url:any){
  //   return this.http1.delete(url)
  // }

  // delete(id: NumberOrString) {
  //   return this.http1.delete(`api/v1/customer/address?address_id=`+id);
  // }
}