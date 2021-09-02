## 线

<my-line></my-line>
<back-top></back-top>

**参数**

| 参数    |  类型  |     描述     |
| ------- | :----: | :----------: |
| options | Object | 点图层的配置 |

**Options**

| 属性         |      类型      |    默认值    |                         描述                          |
| ------------ | :------------: | :----------: | :---------------------------------------------------: |
| id           |     String     |      无      |                 为图层 id 必传且唯一                  |
| imageOptions | Array<Object\> |      无      | 配置 icon 的信息。icon 为图片 iconName 为 icon 名字。 |
| data         |     Object     |      无      |                    需要设置的数据                     |
| paint        |     Object     | 预设文字颜色 |                  样式如颜色、透明度                   |
| layout       |     Object     | 预设文字大小 |               样式如文字大小、icon 大小               |
| maxzoom      |     Number     |      24      |              图层在地图上显示的最大层级               |
| mainzoom     |     Number     |      0       |              图层在地图上显示的最小层级               |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="map"></div>
  </body>

  <script>
    const mapId = document.getElementById("map");
    const map = new SsiMap.SsiMap("keyxxxx", {
      container: mapId,
      logoPosition: false,
      center: [121.13055, 31.457735],
      zoom: 12,
      style: "mapbox://styles/mapbox/streets-v11",
    });

    let point = {
      id: "point1",
      imageOptions: [
        {
          icon: "https://docs.mapbox.com/mapbox-gl-js/assets/cat.png",
          iconName: "cat",
        },
        {
          icon:
            "http://10.10.1.147:1446//icon-%E5%85%AC%E5%85%B1%E8%87%AA%E8%A1%8C%E8%BD%A6.png",
          iconName: "back",
        },
      ],
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [121.13055, 31.457735],
            },
            properties: {
              title: "mapbox",
              icon: "cat",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [121.53055, 31.457735],
            },
            properties: {
              title: "自行车",
              icon: "back",
            },
          },
        ],
      },
      paint: {},
      maxzoom: 24,
      minzoom: 0,
    };

    map.setPoint(point);
  </script>
</html>
```
