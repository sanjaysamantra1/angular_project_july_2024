import './polyfills.server.mjs';
import{k as n}from"./chunk-DF25HKWL.mjs";import{L as o,Q as s}from"./chunk-JKXBMAFK.mjs";var p=(()=>{let t=class t{constructor(e){this.httpClient=e}getAllProducts(){return this.httpClient.get("https://fakestoreapi.com/products")}getProductDetails(e){let i=`https://fakestoreapi.com/products/${e}`;return this.httpClient.get(i)}};t.\u0275fac=function(i){return new(i||t)(s(n))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{p as a};