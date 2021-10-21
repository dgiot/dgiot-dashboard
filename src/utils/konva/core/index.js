// * @Author: h7ml
// * @Date: 2021-10-20 18:22:35
// * @LastEditors: h7ml
// * @LastEditTime: 2021-10-20 18:22:35
// * @Description: 将konva封装到自己的js里 方便管理
// * @FilePath: src\utils\konva\core\index.js
// * @DocumentLink: https://konvajs.org/docs/index.html
import konva from 'konva'

// konva画布默认参数
let konvaAttr = {
  width: 1200, // 布局宽度
  height: 700, // 布局宽度
  scale: 100, // 缩放比例
}
// EventKey 操作konva对象的属性
let EventKey = 'clickNode'

// 创建konva
/**
 *
 * @param attr
 * @param json
 */
export function createKonvaDom(attr, json, setattrs = konvaAttr) {
  const { hash } = location
  console.log('当前路由hash', hash)
  if (!hash.includes('Topo')) return false
  console.log(setattrs)
  const konvaDom = new Konva.Stage({
    container: attr,
    width: setattrs.width ? setattrs.width : konvaAttr.width,
    height: setattrs.height ? setattrs.height : konvaAttr.height,
  })
  topo.layer = new Konva.Layer({})
  topo.stage = konvaDom
  // 辅助线
  topo.layer.on('dragmove', (e) => {
    console.log('e 辅助线', e)
  })
  konvaDom.on('click', (e) => {
    console.log('e konvaDom', e)
  })
  topo.layer.on('dragend', (e) => {
    console.log('e dragend', e)
  })
  const Rect = new Konva.Rect({
    x: 20,
    y: 20,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
  })
  Rect.scale({
    x: setattrs.scaleX ? setattrs.scaleX : 1,
    y: setattrs.scaleY ? setattrs.scaleY : 1,
  })
  topo.layer.add(Rect)
  // 重绘
  topo.layer.draw()
  console.log('将传入的json添加到layer里', json)
  topo.stage.add(topo.layer)
  console.log('节点存在', $(`#${attr}`)[0], konvaDom)
  console.log(topo.layer.toJSON())
  console.log(topo.stage.toJSON())
}

// window.onload = isKonvaDom('kevCurrent')
function selectBg() {
  const bg = topo.layer.find('#bg')
  if (bg.length > 0) {
    console.log(bg[0])
    // this.emit('clickNode', bg[0].attrs)
  }
}

const topo = {
  konva,
  konvaAttr: konvaAttr,
  stage: konva.stage,
  layer: konva.layer,
  Transformer: konva.Transformer,
  data: [],
  listener: function () {
    return 'listener res'
  },
}
window.topo = topo
export default topo