let point = {
    id: 'point1',
    imageOptions: [{
            icon: 'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
            iconName: 'cat'
        },
        {
            icon: 'http://10.10.1.147:1446//icon-%E5%85%AC%E5%85%B1%E8%87%AA%E8%A1%8C%E8%BD%A6.png',
            iconName: 'back'
        }
    ],
    data: {
        type: 'FeatureCollection',
        features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [121.13055, 31.457735]
                },
                properties: {
                    title: 'mapbox',
                    icon: 'cat',
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [121.53055, 31.457735]
                },
                properties: {
                    title: '自行车',
                    icon: 'back',
                }
            }
        ]
    },
}

export {
    point
}