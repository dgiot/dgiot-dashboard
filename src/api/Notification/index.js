// <!--
// * @Author: h7ml
// * @Date: 2021-07-27 09:51:54
// * @LastEditors:
// * @LastEditTime: 2021-07-27 09:51:54
// * @Description: Notification api
// * @FilePath: src\api\Notification\index.js
// * @DocumentLink: https://docs.parseplatform.org/dotnet/guide/#push-notifications
// -->

import request from '@/utils/request'
import {
  query_object,
  get_object,
  del_object,
  update_object,
  create_object,
  query_object_header,
} from '@/api/shuwa_parse'

export async function queryNotification(params) {
  return query_object('Notification', params)
}

export async function getNotification(ObjectId) {
  return get_object('Notification', ObjectId)
}

export async function delNotification(ObjectId) {
  return del_object('Notification', ObjectId)
}

export async function putNotification(ObjectId, params) {
  return update_object('Notification', ObjectId, params)
}

export async function postNotification(params) {
  return create_object('Notification', params)
}
