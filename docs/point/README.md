## 点

<point></point>

**参数**

| 参数         |      类型      |                          描述                           |
| ------------ | :------------: | :-----------------------------------------------------: |
| id           |     String     |                     id 为必传且唯一                     |
| imageOptions | Array<Object\> | 配置 icon 的信息。icon 为图片 iconName 为 icon 名字。 |
| data | Object | 需要设置的数据 |


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

    map.setPoint("point");
  </script>
</html>
```
