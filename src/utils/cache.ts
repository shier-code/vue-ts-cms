/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-12-08 17:01:10
 * @LastEditors: went
 * @LastEditTime: 2021-12-08 17:06:45
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
