

import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getRecommend(params) {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    // 获取配置文件中数据,es6语法
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    });

    return jsonp(url,data,options);
}

export function getDiscList(params) {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';

    const data = Object.assign({}, commonParams,{
        // host: 'c.y.qq.com',
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random()
    });

    return jsonp(url,data,options)
}