import moment from 'moment';

export default class Utils {

  /**
   * 处理数字
   * @param {Number} price 数字
   * @param {Number} num 保留几位小数
   * @returns {String} 数
   */
  static numDeal = (price, num=2) => {
    const fPrice = price * 1;
    if(!fPrice) {
      return 0;
    }
    if(fPrice.toString().indexOf('.') >= 0) {
      if(fPrice.toString().split(".")[1].length > num) {
        return fPrice.toFixed(num);
      }
    }
    return fPrice;
  }

  /**
   * 处理时间
   * @param {Number} date 时间
   * @returns {String} YYYY-MM-DD
   */
  static dateDeal = (date) => {
    if(!date) {
      return '';
    }
    return date.split(' ')[0];
  }

  /**
   * 获取时间  默认为当前时间
   * @returns {String} YYYY-MM-DD
   */
  static getDate() {
    return moment().format("YYYY-MM-DD");
  }

  /**
   * 字段的验证
   * @param {Any} value 值
   * @param {Number} type 类型
   * @returns {Boolean}
   */
  static validate = (value, type='require') => {
    // 非空验证
    if(type === 'require'){
      return !!value;
    }
    // 手机号验证
    if(type === 'phone'){
      // return /^1[34578]\d{9}$/.test(value);
      return /^1\d{10}$/.test(value);
    }
    // 邮箱格式验证
    if(type === 'email'){
      return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }
  }

  /**
   * 从list中删除一项
   * @param {Array} list
   * @param {String} param 索引
   * @param {String} listParm list的关键字
   * @returns {Array}
   */
  static arrDeleteOne(list, param, listParm) {
    const arr = [];
    list.forEach(item => {
      const fparam = listParm ? item[listParm] : item;
      if(fparam != param) arr.push(item);
    });
    return arr;
  }

  /**
   * 转换成有层级的数组，一般用于树形
   * @param {Array} list
   * @param {String} parm
   * @param {String} fparm
   * @param {String} pval 顶级的值
   */
  static convertArr(list, pval, parm='id', fparm='parent_id') {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      if(list[i][fparm] == pval) {
        let obj = list[i];
        obj.children = Utils.convertArr(list, list[i][parm], parm, fparm)
        arr.push(obj)
      }
    }
    return arr;
  }

  /**
   * 阿拉伯数字转成大写
   * @param {Number} num 评分值
   */
  static numToBig(num) {
    num = Number(num);
    var upperCaseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    let length = String(num).length;
    if (length == 1) {
      return upperCaseNumber[num];
    } else if (length == 2) {
      if (num == 10) {
        return upperCaseNumber[num];
      } else if (num > 10 && num < 20) {
        return '十' + upperCaseNumber[String(num).charAt(1)];
      } else {
        return upperCaseNumber[String(num).charAt(0)] + '十' + upperCaseNumber[String(num).charAt(1)].replace('零', '');
      }
    }
  }

  /**
   * 去掉前后所有空格的字符串
   * @param {string} str 字符串
   */
  static trim(str) {
    if(!str) return '';
    return str.replace(/(^\s*)|(\s*$)/g, '');
  }

  /**
   * 生成随机ID
   * @param {Number} start 随机数截取起始位置
   * @param {Number} length 随机数截取ID长度
   * @returns {Number} 返回随机ID
   */
  static randomID(start = 2, length = 6){
    return Number(Math.random().toString().substr(start,length) + Date.now()).toString(36)
  }

  /**
   * 匹配数组对象中的某个值
   * @param {Array} list 数组
   * @param {String} value 需要匹配的值
   * @param {String} key 属性名
   * @param {Boolean} isBool 是否返回布尔值
   */
  static findItem( list, value, key='id', isBool=false ) {
    let obj = list.find(item => {
      return item[key] === value
    })||{};
    if( isBool ) {
      if( !obj ) {
        return false;
      }else {
        return true;
      }
    }else {
      return obj;
    }
  }

  /**
   * 获取权限
   */
  static async requestCarmeraPermission() {
    if(Platform.OS === 'ios') return true;
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': '获取相机权限',
          'message': '此操作需要获取您的相机权限'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // 你已获取了相机权限
        // alert("你已获取了相机权限");
        return true;
      } else {
        Utils.toast("获取相机失败");
      }
    } catch (err) {
      console.log(err)
      Utils.toast("获取权限失败");
    }
  }

  /**
   *  由对象组成的数组去重
   *  @param {Array} arr 数组
   *  @param {String} key 需要匹配的关键字
   */
  static objArrFilter(arr=[],key='id') {
    let hash = {}
    return arr.reduce(function(item, next) {
      hash[next[key]] ? '' : hash[next[key]] = true && item.push(next);
        return item;
    }, []);
  }

  /**
   * 将时间转化为秒数
   * @param {String} time xx:yy:zz 时间数
   * @returns {Number}
   */
  static changeTime = ( time ) => {
    if( !time ) return null
    hourNum =  Number(time.substring(0,2))*3600
    mimuteNum =  Number(time.substring(3,5))*60
    secondNum = Number(time.substring(6,8))
    totalNum = hourNum + mimuteNum + secondNum
    return totalNum
  }

}
