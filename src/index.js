
module.exports = { main }

function main(input) {
  const result = []

  for(var i = 0; i < input.length; i++) {
    const item = input[i]

    if (Array.isArray(item)) {
      for(var j = 0; j < item.length; j++) {
        const subItem = item[j]
        if (subItem.widget_legacy) {
          result.push({
            id: subItem.id,
            type: subItem.widget_legacy.split('_')[0],
            name: subItem.widget_legacy.split('_')[1],
          })
        } else {
          result.push({
            id: subItem.id,
            type: subItem.widget.type,
            name: subItem.widget.name,
          })
        }
      }
    } else {
      if (item.widget_legacy) {
        result.push({
          id: item.id,
          type: item.widget_legacy.split('_')[0],
          name: item.widget_legacy.split('_')[1],
        })
      } else {
        result.push({
          id: item.id,
          type: item.widget.type,
          name: item.widget.name,
        })
      }
    }
  }

  return result
}
