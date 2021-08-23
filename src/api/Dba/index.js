/*
 * @Author: h7ml
 * @Date: 2021-02-01 19:02:18
 * @LastEditTime: 2021-02-22 12:14:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dgiot_dashboard\src\api\Device\index.js
 */
import request from '@/utils/request'

export async function getTable() {
  const serverTable = request({
    url: '/table',
    method: 'get',
  })
  const mockTable = {
    results: [
      {
        className: 'License',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          app: { type: 'Pointer', targetClass: 'App' },
          key: { type: 'String', required: true },
          mac: { type: 'String' },
          core: { type: 'String' },
          disk: { type: 'String' },
          type: { type: 'String' },
          detail: { type: 'Object' },
          status: { type: 'String' },
          appname: { type: 'String' },
          license: { type: 'String' },
          product: { type: 'Object' },
          software: { type: 'String' },
          is_online: { type: 'Boolean' },
          public_ip: { type: 'String' },
          private_ip: { type: 'String' },
          customer_name: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Channel',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          desc: { type: 'String' },
          name: { type: 'String', required: true },
          type: { type: 'String' },
          cType: { type: 'String', required: true },
          config: { type: 'Object' },
          status: { type: 'String' },
          product: { type: 'Relation', targetClass: 'Product' },
          isEnable: { type: 'Boolean' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Project',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          app: { type: 'Relation', targetClass: 'App' },
          desc: { type: 'String' },
          logo: { type: 'String' },
          user: { type: 'Pointer', targetClass: '_User' },
          scale: { type: 'Number' },
          title: { type: 'String', required: true },
          config: { type: 'Object' },
          domain: { type: 'String' },
          enable: { type: 'Boolean' },
          default: { type: 'Boolean' },
          product: { type: 'Relation', targetClass: 'Product' },
          category: { type: 'String' },
          userUnit: { type: 'String' },
          copyright: { type: 'String' },
          dashboard: { type: 'String' },
          background: { type: 'String' },
          productIdentifier: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Permission',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          name: { type: 'String' },
          tags: { type: 'Array' },
          alias: { type: 'String' },
          parent: { type: 'Pointer', targetClass: 'Permission' },
          description: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: '_Installation',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          installationId: { type: 'String' },
          deviceToken: { type: 'String' },
          channels: { type: 'Array' },
          deviceType: { type: 'String' },
          pushType: { type: 'String' },
          GCMSenderId: { type: 'String' },
          timeZone: { type: 'String' },
          localeIdentifier: { type: 'String' },
          badge: { type: 'Number' },
          appVersion: { type: 'String' },
          appName: { type: 'String' },
          appIdentifier: { type: 'String' },
          parseVersion: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { '*': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: '_Session',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          restricted: { type: 'Boolean' },
          user: { type: 'Pointer', targetClass: '_User' },
          installationId: { type: 'String' },
          sessionToken: { type: 'String' },
          expiresAt: { type: 'Date' },
          createdWith: { type: 'Object' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { '*': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: 'App',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          desc: { type: 'String' },
          name: { type: 'String', required: true },
          user: { type: 'Pointer', targetClass: '_User' },
          config: { type: 'Object' },
          enable: { type: 'Boolean' },
          secret: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Notification',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          type: { type: 'String' },
          user: { type: 'Pointer', targetClass: '_User' },
          public: { type: 'Boolean' },
          readBy: { type: 'Relation', targetClass: '_User' },
          sender: { type: 'Pointer', targetClass: '_User' },
          content: { type: 'String' },
          deletedBy: { type: 'Relation', targetClass: '_User' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { '*': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: 'Dict',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          key: { type: 'String' },
          data: { type: 'Object' },
          type: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Timescale',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          tags: { type: 'Object', required: false },
          device: { type: 'Pointer', targetClass: 'Device' },
          values: { type: 'Object', required: true },
          product: { type: 'Pointer', required: false, targetClass: 'Product' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: 'Crond',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          tid: { type: 'Number' },
          args: { type: 'Object' },
          name: { type: 'String', required: true },
          task: { type: 'Object' },
          type: { type: 'Number', required: true },
          crond: { type: 'Object' },
          active: { type: 'Number' },
          remark: { type: 'String' },
          product: { type: 'Pointer', targetClass: 'Product' },
          visible: { type: 'Number' },
          typedesc: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Instruct',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          di: { type: 'String' },
          op: { type: 'String' },
          pn: { type: 'String' },
          name: { type: 'String' },
          order: { type: 'String' },
          other: { type: 'Object' },
          device: { type: 'Pointer', targetClass: 'Device' },
          enable: { type: 'Boolean' },
          product: { type: 'Pointer', targetClass: 'Product' },
          duration: { type: 'Number' },
          interval: { type: 'Number' },
          rotation: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: 'Menu',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          url: { type: 'String' },
          icon: { type: 'String' },
          meta: { type: 'Object', required: false, defaultValue: {} },
          name: { type: 'String' },
          parent: { type: 'Pointer', targetClass: 'Menu' },
          orderBy: { type: 'Number' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Product',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          desc: { type: 'String' },
          icon: { type: 'String' },
          name: { type: 'String', required: true },
          thing: { type: 'Object' },
          config: { type: 'Object' },
          topics: { type: 'Array' },
          decoder: { type: 'Object' },
          devType: { type: 'String', required: true },
          netType: { type: 'String' },
          category: { type: 'String' },
          children: { type: 'Relation', targetClass: 'Product' },
          nodeType: { type: 'Number' },
          dynamicReg: { type: 'Boolean' },
          productSecret: { type: 'String' },
          productIdentifier: { type: 'String' },
          serverCallbackModel: { type: 'Array' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Evidence',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          ukey: { type: 'String' },
          scene: { type: 'String' },
          original: { type: 'Object' },
          reportId: { type: 'String' },
          signData: { type: 'String' },
          timestamp: { type: 'Number' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: '_Role',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          name: { type: 'String' },
          users: { type: 'Relation', targetClass: '_User' },
          roles: { type: 'Relation', targetClass: '_Role' },
          tag: { type: 'Object' },
          desc: { type: 'String' },
          alias: { type: 'String' },
          level: { type: 'Number' },
          menus: { type: 'Relation', targetClass: 'Menu' },
          order: { type: 'Number' },
          rules: { type: 'Relation', targetClass: 'Permission' },
          parent: { type: 'Pointer', targetClass: '_Role' },
          depname: { type: 'String' },
          leafnode: { type: 'Boolean' },
          org_type: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { '*': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: '_User',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          username: { type: 'String' },
          password: { type: 'String' },
          email: { type: 'String' },
          emailVerified: { type: 'Boolean' },
          authData: { type: 'Object' },
          tag: { type: 'Object' },
          nick: { type: 'String' },
          phone: { type: 'String' },
          department: { type: 'String' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { '*': true },
          protectedFields: { '*': [] },
        },
      },
      {
        className: 'Device',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          ip: { type: 'String' },
          dict: { type: 'Object', required: false },
          name: { type: 'String' },
          route: { type: 'Object' },
          detail: { type: 'Object' },
          status: { type: 'String' },
          devaddr: { type: 'String', required: true },
          product: { type: 'Pointer', required: true, targetClass: 'Product' },
          profile: { type: 'Object', required: false },
          basedata: { type: 'Object' },
          isEnable: { type: 'Boolean' },
          location: { type: 'GeoPoint', required: false },
          parentId: { type: 'Pointer', targetClass: 'Device' },
          lastOnlineTime: { type: 'Number' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { 'role:root': true },
          protectedFields: {},
        },
      },
      {
        className: 'Maintenance',
        fields: {
          objectId: { type: 'String' },
          createdAt: { type: 'Date' },
          updatedAt: { type: 'Date' },
          ACL: { type: 'ACL' },
          info: {
            type: 'Object',
            required: false,
            defaultValue: {
              photo: [],
              step1: {},
              step2: {},
              step3: {},
              step4: {},
              timeline: [],
            },
          },
          name: { type: 'String', required: false },
          type: { type: 'String', required: false },
          user: { type: 'Pointer', required: false, targetClass: '_User' },
          device: { type: 'Pointer', required: false, targetClass: 'Device' },
          number: { type: 'String', required: false },
          status: { type: 'Number', required: false },
          product: { type: 'Pointer', required: false, targetClass: 'Product' },
        },
        classLevelPermissions: {
          find: { '*': true },
          get: { '*': true },
          count: { '*': true },
          create: { '*': true },
          update: { '*': true },
          delete: { '*': true },
          addField: { '*': true },
          protectedFields: { '*': [] },
        },
      },
    ],
  }
  let table = mockTable
  process.env.NODE_ENV === 'production'
    ? (table = serverTable)
    : (table = mockTable)
  return table
}