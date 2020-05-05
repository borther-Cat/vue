import axios from 'axios';

const url= axios.create({
    baseURL: 'https://www.fastmock.site/mock/8748f75885f99529ec451cff0ce3e32f/data'
});

function get(params){
  return url.get(`/${params}`)
}

export default get