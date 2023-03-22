$(function(){
    var suvData;
    var mpvData;
    var totalData;
    var carData;
    var otherData;
    var newData;
    var totalYdata=[];
    var carYdata=[];
    var suvYdata=[];
    var mpvYdata=[];
    var newYdata=[];

    getData();
    function getData(){
        $.ajax({
            method: 'get',
            url: '/trendAnalysis',
            dataType: 'json',
            success: function (result) {
                console.log(result);
                var data=JSON.parse(JSON.stringify(result));
                suvData=data.SUVSalesResult;
                mpvData=data.MPVSalesResult;
                totalData=data.totalSalesResult;
                carData=data.carSalesResult;
                newData=data.newSalesResult;

                for(var i in totalData){
                    console.log(totalData[i]);
                    totalYdata.push(totalData[i])
                }

                otherData=data.otherSalesResult;


                for(var i in carData){
                    carYdata.push(carData[i])
                }
                for(var i in suvData){
                    suvYdata.push(suvData[i])
                }
                for(var i in mpvData){
                    mpvYdata.push(mpvData[i])
                }
                for(var i in newData){
                    newYdata.push(newData[i])
                }




                echarts_trend_total();
                echarts_trend_car();
                echarts_trend_new();
                echarts_trend_suv();
                echarts_trend_mpv();
            }
        })
    }




    function echarts_trend_total() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_trend_total'));
            xData = ["22年8月", "22年9月", "22年10月", "22年11月", "22年12月", "23年1月"],
                y3Data = ['500','500','500','500','500','500','500'];
            datacoords = [];
        for (var i = 0; i < xData.length; i++) {
            datacoords.push([
                {
                    coord: [i, totalYdata[i]],
                },
                {
                    coord: [i + 1, totalYdata[i+1]],
                },
            ]);
        }

        //  for (var i = 0; i < xData.length; i++) {
        //     datacoords.push([
        //       {
        //         coord: [i, y2Data[i]],
        //       },
        //       {
        //         coord: [i + 1, y2Data[i + 1]],
        //       },
        //     ]);
        //   }
        for (var i = 0; i < xData.length; i++) {
            datacoords.push([
                {
                    coord: [i, newYdata[i]],
                },
                {
                    coord: [i + 1, newYdata[i + 1]],
                },
            ]);
        }


        option = {
            animation: true, //控制动画示否开启
            animationDuration: 3000,
            animationEasing: "bounceOut", //缓动动画
            animationThreshold: 8, //动画元素的阈值
            backgroundColor: "transparent", // 给echarts图设置背景色
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,.5)",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "rgba(0,0,0,.5)",
                    },
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            grid: {
                left: "3%", //图表距边框的距离
                right: "3%",
                top: "15%",
                bottom: "5%",
                containLabel: true,
            },
            xAxis: [
                {
                    nameGap: 3,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                    type: "category",
                    data: xData,
                    boundaryGap: false, //从0开始
                    axisLine: {
                        onZero: true,
                        rotate: 30, //坐标轴内容过长旋转
                        interval: 1,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                    axisTick: {
                        //坐标轴刻度颜色  x和y不交叉
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
                    name: "辆",
                    min: 0,
                    // max: function (value) {
                    //     return Math.ceil(value.max / 5) * 5;
                    // },
                    max:2900000,
                    splitNumber: 5,
                    type: "value",
                    nameTextStyle: {
                        color: "rgba(255,255,255,.89)",
                        fontSize: 12,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.25)",
                            type: "dashed",
                        },
                    },
                    axisTick: {
                        //坐标轴刻度颜色
                        show: false,
                    },
                    axisLine: {
                        //坐标轴线颜色
                        show: true,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                },
            ],
            series: [
                {
                    name: "总销量",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#DC7828",
                        width: 1.5,
                        type: "dashed",
                        shadowOffsetX: 0, // 折线的X偏移
                        shadowOffsetY: 10, // 折线的Y偏移
                        shadowBlur: 4, // 折线模糊
                        shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                    },
                    showSymbol: true, //是否默认展示圆点
                    symbol: "circle", // 默认是空心圆（中间是白色的）
                    symbolSize: 7,
                    itemStyle: {
                        color: "#021E47", //实圆的背景色
                        borderWidth: 1,
                        borderColor: "#DC7828",
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: "rgba(220,120,40,0.8)",
                            },
                            {
                                offset: 0.74,
                                color: "rgba(220,120,40,0.5)",
                            },
                            {
                                offset: 0,
                                color: "rgba(220,120,40,0)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: totalYdata,
                },
                //   {
                //     name: "新能源车销量",
                //     type: "line",
                //     smooth: false,
                //     lineStyle: {
                //       color: "rgba(65,105,225,0.8)",
                //       width: 1.5,
                //       type: "dashed",
                //       shadowOffsetX: 0, // 折线的X偏移
                //       shadowOffsetY: 10, // 折线的Y偏移
                //       shadowBlur: 4, // 折线模糊
                //       shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                //     },
                //     showSymbol: true, //是否默认展示圆点
                //     symbol: "circle", // 默认是空心圆（中间是白色的）
                //     symbolSize: 7,
                //     itemStyle: {
                //       color: "#021E47", //实圆的背景色
                //       borderWidth: 1,
                //       borderColor: "rgba(65,105,225,0.8)",
                //     },
                //     areaStyle: {
                //       color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //         {
                //           offset: 1,
                //           color: "rgba(65,105,225,0.7)",
                //         },
                //         {
                //           offset: 0.74,
                //           color: "rgba(100,149,237,0.9)",
                //         },
                //         {
                //           offset: 0,
                //           color: "rgba(220,120,40,0)",
                //         },
                //       ]),
                //     },
                //     emphasis: {
                //       focus: "series",
                //     },
                //     data: y2Data,
                //   },
                {
                    name: "新能源车销量",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#021E47",
                        width: 1.5,
                        type: "dashed",
                        shadowOffsetX: 0, // 折线的X偏移
                        shadowOffsetY: 10, // 折线的Y偏移
                        shadowBlur: 4, // 折线模糊
                        shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                    },
                    showSymbol: true, //是否默认展示圆点
                    symbol: "circle", // 默认是空心圆（中间是白色的）
                    symbolSize: 7,
                    itemStyle: {
                        color: "#DC7828", //实圆的背景色
                        borderWidth: 1,
                        borderColor: "#021E47",
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: '#032336',
                            },
                            {
                                offset: 0.74,
                                color: '#3bcbf6',
                            },
                            {
                                offset: 0,
                                color: "rgba(220,120,40,0)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: newYdata,
                },
                {
                    showSymbol: false,
                    name: "苏苏小苏苏",
                    type: "lines",
                    polyline: true,
                    smooth: true,
                    coordinateSystem: "cartesian2d",
                    zlevel: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        period: 6,
                        symbolSize: 4,
                    },
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        opacity: 0,
                        curveness: 0,
                        cap: "round",
                    },
                    data: datacoords,
                },
            ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_trend_car() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_trend_car'));
            xData = ["22年8月", "22年9月", "22年10月", "22年11月", "22年12月", "23年1月"],
            datacoords = [];
        for (var i = 0; i < xData.length; i++) {
            datacoords.push([
                {
                    coord: [i, carYdata[i]],
                },
                {
                    coord: [i + 1, carYdata[i + 1]],
                },
            ]);
        }



        option = {
            animation: true, //控制动画示否开启
            animationDuration: 3000,
            animationEasing: "bounceOut", //缓动动画
            animationThreshold: 8, //动画元素的阈值
            backgroundColor: "transparent", // 给echarts图设置背景色
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,.5)",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "rgba(0,0,0,.5)",
                    },
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            grid: {
                left: "3%", //图表距边框的距离
                right: "3%",
                top: "15%",
                bottom: "5%",
                containLabel: true,
            },
            xAxis: [
                {
                    nameGap: 3,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                    type: "category",
                    data: xData,
                    boundaryGap: false, //从0开始
                    axisLine: {
                        onZero: true,
                        rotate: 30, //坐标轴内容过长旋转
                        interval: 1,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                    axisTick: {
                        //坐标轴刻度颜色  x和y不交叉
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
                    name: "万辆",
                    min: 0,
                    max: function (value) {
                        return Math.ceil(value.max / 5) * 5;
                    },
                    splitNumber: 5,
                    type: "value",
                    nameTextStyle: {
                        color: "rgba(255,255,255,.89)",
                        fontSize: 12,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.25)",
                            type: "dashed",
                        },
                    },
                    axisTick: {
                        //坐标轴刻度颜色
                        show: false,
                    },
                    axisLine: {
                        //坐标轴线颜色
                        show: true,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                },
            ],
            series: [
                {
                    name: "总销量",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#DC7828",
                        width: 1.5,
                        type: "dashed",
                        shadowOffsetX: 0, // 折线的X偏移
                        shadowOffsetY: 10, // 折线的Y偏移
                        shadowBlur: 4, // 折线模糊
                        shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                    },
                    showSymbol: true, //是否默认展示圆点
                    symbol: "circle", // 默认是空心圆（中间是白色的）
                    symbolSize: 7,
                    itemStyle: {
                        color: "#021E47", //实圆的背景色
                        borderWidth: 1,
                        borderColor: "#DC7828",
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: "rgba(220,120,40,0.8)",
                            },
                            {
                                offset: 0.74,
                                color: "rgba(220,120,40,0.5)",
                            },
                            {
                                offset: 0,
                                color: "rgba(220,120,40,0)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: carYdata,
                },
                //   {
                //     name: "新能源车销量",
                //     type: "line",
                //     smooth: false,
                //     lineStyle: {
                //       color: "rgba(65,105,225,0.8)",
                //       width: 1.5,
                //       type: "dashed",
                //       shadowOffsetX: 0, // 折线的X偏移
                //       shadowOffsetY: 10, // 折线的Y偏移
                //       shadowBlur: 4, // 折线模糊
                //       shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                //     },
                //     showSymbol: true, //是否默认展示圆点
                //     symbol: "circle", // 默认是空心圆（中间是白色的）
                //     symbolSize: 7,
                //     itemStyle: {
                //       color: "#021E47", //实圆的背景色
                //       borderWidth: 1,
                //       borderColor: "rgba(65,105,225,0.8)",
                //     },
                //     areaStyle: {
                //       color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //         {
                //           offset: 1,
                //           color: "rgba(65,105,225,0.7)",
                //         },
                //         {
                //           offset: 0.74,
                //           color: "rgba(100,149,237,0.9)",
                //         },
                //         {
                //           offset: 0,
                //           color: "rgba(220,120,40,0)",
                //         },
                //       ]),
                //     },
                //     emphasis: {
                //       focus: "series",
                //     },
                //     data: y2Data,
                //   },
                {
                    showSymbol: false,
                    name: "苏苏小苏苏",
                    type: "lines",
                    polyline: true,
                    smooth: true,
                    coordinateSystem: "cartesian2d",
                    zlevel: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        period: 6,
                        symbolSize: 4,
                    },
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        opacity: 0,
                        curveness: 0,
                        cap: "round",
                    },
                    data: datacoords,
                },
            ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_trend_new() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_trend_new'));
            xData = ["22年8月", "22年9月", "22年10月", "22年11月", "22年12月", "23年1月"],
            datacoords = [];
        for (var i = 0; i < xData.length; i++) {
            datacoords.push([
                {
                    coord: [i, newYdata[i]],
                },
                {
                    coord: [i + 1, newYdata[i + 1]],
                },
            ]);
        }

        //  for (var i = 0; i < xData.length; i++) {
        //     datacoords.push([
        //       {
        //         coord: [i, y2Data[i]],
        //       },
        //       {
        //         coord: [i + 1, y2Data[i + 1]],
        //       },
        //     ]);
        //   }


        option = {
            animation: true, //控制动画示否开启
            animationDuration: 3000,
            animationEasing: "bounceOut", //缓动动画
            animationThreshold: 8, //动画元素的阈值
            backgroundColor: "transparent", // 给echarts图设置背景色
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,.5)",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "rgba(0,0,0,.5)",
                    },
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            grid: {
                left: "3%", //图表距边框的距离
                right: "3%",
                top: "15%",
                bottom: "5%",
                containLabel: true,
            },
            xAxis: [
                {
                    nameGap: 3,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                    type: "category",
                    data: xData,
                    boundaryGap: false, //从0开始
                    axisLine: {
                        onZero: true,
                        rotate: 30, //坐标轴内容过长旋转
                        interval: 1,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                    axisTick: {
                        //坐标轴刻度颜色  x和y不交叉
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
                    name: "万辆",
                    min: 0,
                    max: function (value) {
                        return Math.ceil(value.max / 5) * 5;
                    },
                    splitNumber: 5,
                    type: "value",
                    nameTextStyle: {
                        color: "rgba(255,255,255,.89)",
                        fontSize: 12,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.25)",
                            type: "dashed",
                        },
                    },
                    axisTick: {
                        //坐标轴刻度颜色
                        show: false,
                    },
                    axisLine: {
                        //坐标轴线颜色
                        show: true,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                },
            ],
            series: [
                {
                    name: "总销量",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#DC7828",
                        width: 1.5,
                        type: "dashed",
                        shadowOffsetX: 0, // 折线的X偏移
                        shadowOffsetY: 10, // 折线的Y偏移
                        shadowBlur: 4, // 折线模糊
                        shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                    },
                    showSymbol: true, //是否默认展示圆点
                    symbol: "circle", // 默认是空心圆（中间是白色的）
                    symbolSize: 7,
                    itemStyle: {
                        color: "#021E47", //实圆的背景色
                        borderWidth: 1,
                        borderColor: "#DC7828",
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: "rgba(220,120,40,0.8)",
                            },
                            {
                                offset: 0.74,
                                color: "rgba(220,120,40,0.5)",
                            },
                            {
                                offset: 0,
                                color: "rgba(220,120,40,0)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: newYdata,
                },
                //   {
                //     name: "新能源车销量",
                //     type: "line",
                //     smooth: false,
                //     lineStyle: {
                //       color: "rgba(65,105,225,0.8)",
                //       width: 1.5,
                //       type: "dashed",
                //       shadowOffsetX: 0, // 折线的X偏移
                //       shadowOffsetY: 10, // 折线的Y偏移
                //       shadowBlur: 4, // 折线模糊
                //       shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                //     },
                //     showSymbol: true, //是否默认展示圆点
                //     symbol: "circle", // 默认是空心圆（中间是白色的）
                //     symbolSize: 7,
                //     itemStyle: {
                //       color: "#021E47", //实圆的背景色
                //       borderWidth: 1,
                //       borderColor: "rgba(65,105,225,0.8)",
                //     },
                //     areaStyle: {
                //       color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //         {
                //           offset: 1,
                //           color: "rgba(65,105,225,0.7)",
                //         },
                //         {
                //           offset: 0.74,
                //           color: "rgba(100,149,237,0.9)",
                //         },
                //         {
                //           offset: 0,
                //           color: "rgba(220,120,40,0)",
                //         },
                //       ]),
                //     },
                //     emphasis: {
                //       focus: "series",
                //     },
                //     data: y2Data,
                //   },
                {
                    showSymbol: false,
                    name: "苏苏小苏苏",
                    type: "lines",
                    polyline: true,
                    smooth: true,
                    coordinateSystem: "cartesian2d",
                    zlevel: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        period: 6,
                        symbolSize: 4,
                    },
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        opacity: 0,
                        curveness: 0,
                        cap: "round",
                    },
                    data: datacoords,
                },
            ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_trend_suv() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_trend_suv'));
        let yData = [750, 555, 666, 999, 567, 510],
            y2Data = [190, 255, 366, 499, 220, 399],
            y3Data = [555, 432, 399, 222, 341, 111],
            xData = ["22年8月", "22年9月", "22年10月", "22年11月", "22年12月", "23年1月"],
            datacoords = [];
        for (var i = 0; i < xData.length; i++) {
            datacoords.push([
                {
                    coord: [i, suvYdata[i]],
                },
                {
                    coord: [i + 1, suvYdata[i + 1]],
                },
            ]);
        }

        //  for (var i = 0; i < xData.length; i++) {
        //     datacoords.push([
        //       {
        //         coord: [i, y2Data[i]],
        //       },
        //       {
        //         coord: [i + 1, y2Data[i + 1]],
        //       },
        //     ]);
        //   }


        option = {
            animation: true, //控制动画示否开启
            animationDuration: 3000,
            animationEasing: "bounceOut", //缓动动画
            animationThreshold: 8, //动画元素的阈值
            backgroundColor: "transparent", // 给echarts图设置背景色
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,.5)",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "rgba(0,0,0,.5)",
                    },
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            grid: {
                left: "3%", //图表距边框的距离
                right: "3%",
                top: "15%",
                bottom: "5%",
                containLabel: true,
            },
            xAxis: [
                {
                    nameGap: 3,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                    type: "category",
                    data: xData,
                    boundaryGap: false, //从0开始
                    axisLine: {
                        onZero: true,
                        rotate: 30, //坐标轴内容过长旋转
                        interval: 1,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                    axisTick: {
                        //坐标轴刻度颜色  x和y不交叉
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
                    name: "万辆",
                    min: 0,
                    max: function (value) {
                        return Math.ceil(value.max / 5) * 5;
                    },
                    splitNumber: 5,
                    type: "value",
                    nameTextStyle: {
                        color: "rgba(255,255,255,.89)",
                        fontSize: 12,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.25)",
                            type: "dashed",
                        },
                    },
                    axisTick: {
                        //坐标轴刻度颜色
                        show: false,
                    },
                    axisLine: {
                        //坐标轴线颜色
                        show: true,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                },
            ],
            series: [
                {
                    name: "总销量",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#DC7828",
                        width: 1.5,
                        type: "dashed",
                        shadowOffsetX: 0, // 折线的X偏移
                        shadowOffsetY: 10, // 折线的Y偏移
                        shadowBlur: 4, // 折线模糊
                        shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                    },
                    showSymbol: true, //是否默认展示圆点
                    symbol: "circle", // 默认是空心圆（中间是白色的）
                    symbolSize: 7,
                    itemStyle: {
                        color: "#021E47", //实圆的背景色
                        borderWidth: 1,
                        borderColor: "#DC7828",
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: "rgba(220,120,40,0.8)",
                            },
                            {
                                offset: 0.74,
                                color: "rgba(220,120,40,0.5)",
                            },
                            {
                                offset: 0,
                                color: "rgba(220,120,40,0)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: suvYdata,
                },
                //   {
                //     name: "新能源车销量",
                //     type: "line",
                //     smooth: false,
                //     lineStyle: {
                //       color: "rgba(65,105,225,0.8)",
                //       width: 1.5,
                //       type: "dashed",
                //       shadowOffsetX: 0, // 折线的X偏移
                //       shadowOffsetY: 10, // 折线的Y偏移
                //       shadowBlur: 4, // 折线模糊
                //       shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                //     },
                //     showSymbol: true, //是否默认展示圆点
                //     symbol: "circle", // 默认是空心圆（中间是白色的）
                //     symbolSize: 7,
                //     itemStyle: {
                //       color: "#021E47", //实圆的背景色
                //       borderWidth: 1,
                //       borderColor: "rgba(65,105,225,0.8)",
                //     },
                //     areaStyle: {
                //       color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //         {
                //           offset: 1,
                //           color: "rgba(65,105,225,0.7)",
                //         },
                //         {
                //           offset: 0.74,
                //           color: "rgba(100,149,237,0.9)",
                //         },
                //         {
                //           offset: 0,
                //           color: "rgba(220,120,40,0)",
                //         },
                //       ]),
                //     },
                //     emphasis: {
                //       focus: "series",
                //     },
                //     data: y2Data,
                //   },
                {
                    showSymbol: false,
                    name: "苏苏小苏苏",
                    type: "lines",
                    polyline: true,
                    smooth: true,
                    coordinateSystem: "cartesian2d",
                    zlevel: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        period: 6,
                        symbolSize: 4,
                    },
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        opacity: 0,
                        curveness: 0,
                        cap: "round",
                    },
                    data: datacoords,
                },
            ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_trend_mpv() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_trend_mpv'));
        let yData = [750, 555, 666, 999, 567, 510],
            y2Data = [190, 255, 366, 499, 220, 399],
            y3Data = [555, 432, 399, 222, 341, 111],
            xData = ["22年8月", "22年9月", "22年10月", "22年11月", "22年12月", "23年1月"],
            datacoords = [];
        for (var i = 0; i < xData.length; i++) {
            datacoords.push([
                {
                    coord: [i, mpvYdata[i]],
                },
                {
                    coord: [i + 1, mpvYdata[i + 1]],
                },
            ]);
        }

        //  for (var i = 0; i < xData.length; i++) {
        //     datacoords.push([
        //       {
        //         coord: [i, y2Data[i]],
        //       },
        //       {
        //         coord: [i + 1, y2Data[i + 1]],
        //       },
        //     ]);
        //   }


        option = {
            animation: true, //控制动画示否开启
            animationDuration: 3000,
            animationEasing: "bounceOut", //缓动动画
            animationThreshold: 8, //动画元素的阈值
            backgroundColor: "transparent", // 给echarts图设置背景色
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,.5)",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "rgba(0,0,0,.5)",
                    },
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            grid: {
                left: "3%", //图表距边框的距离
                right: "3%",
                top: "15%",
                bottom: "5%",
                containLabel: true,
            },
            xAxis: [
                {
                    nameGap: 3,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                    type: "category",
                    data: xData,
                    boundaryGap: false, //从0开始
                    axisLine: {
                        onZero: true,
                        rotate: 30, //坐标轴内容过长旋转
                        interval: 1,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                    axisTick: {
                        //坐标轴刻度颜色  x和y不交叉
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
                    name: "万辆",
                    min: 0,
                    max: function (value) {
                        return Math.ceil(value.max / 5) * 5;
                    },
                    splitNumber: 5,
                    type: "value",
                    nameTextStyle: {
                        color: "rgba(255,255,255,.89)",
                        fontSize: 12,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.25)",
                            type: "dashed",
                        },
                    },
                    axisTick: {
                        //坐标轴刻度颜色
                        show: false,
                    },
                    axisLine: {
                        //坐标轴线颜色
                        show: true,
                        lineStyle: {
                            color: "#636E7C",
                        },
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.8)", //坐标的字体颜色
                        fontSize: 12,
                    },
                },
            ],
            series: [
                {
                    name: "总销量",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#DC7828",
                        width: 1.5,
                        type: "dashed",
                        shadowOffsetX: 0, // 折线的X偏移
                        shadowOffsetY: 10, // 折线的Y偏移
                        shadowBlur: 4, // 折线模糊
                        shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                    },
                    showSymbol: true, //是否默认展示圆点
                    symbol: "circle", // 默认是空心圆（中间是白色的）
                    symbolSize: 7,
                    itemStyle: {
                        color: "#021E47", //实圆的背景色
                        borderWidth: 1,
                        borderColor: "#DC7828",
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: "rgba(220,120,40,0.8)",
                            },
                            {
                                offset: 0.74,
                                color: "rgba(220,120,40,0.5)",
                            },
                            {
                                offset: 0,
                                color: "rgba(220,120,40,0)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: mpvYdata,
                },
                //   {
                //     name: "新能源车销量",
                //     type: "line",
                //     smooth: false,
                //     lineStyle: {
                //       color: "rgba(65,105,225,0.8)",
                //       width: 1.5,
                //       type: "dashed",
                //       shadowOffsetX: 0, // 折线的X偏移
                //       shadowOffsetY: 10, // 折线的Y偏移
                //       shadowBlur: 4, // 折线模糊
                //       shadowColor: "rgba(255, 255, 255, 0.8)", //设置折线阴影颜色
                //     },
                //     showSymbol: true, //是否默认展示圆点
                //     symbol: "circle", // 默认是空心圆（中间是白色的）
                //     symbolSize: 7,
                //     itemStyle: {
                //       color: "#021E47", //实圆的背景色
                //       borderWidth: 1,
                //       borderColor: "rgba(65,105,225,0.8)",
                //     },
                //     areaStyle: {
                //       color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //         {
                //           offset: 1,
                //           color: "rgba(65,105,225,0.7)",
                //         },
                //         {
                //           offset: 0.74,
                //           color: "rgba(100,149,237,0.9)",
                //         },
                //         {
                //           offset: 0,
                //           color: "rgba(220,120,40,0)",
                //         },
                //       ]),
                //     },
                //     emphasis: {
                //       focus: "series",
                //     },
                //     data: y2Data,
                //   },
                {
                    showSymbol: false,
                    name: "苏苏小苏苏",
                    type: "lines",
                    polyline: true,
                    smooth: true,
                    coordinateSystem: "cartesian2d",
                    zlevel: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        period: 6,
                        symbolSize: 4,
                    },
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        opacity: 0,
                        curveness: 0,
                        cap: "round",
                    },
                    data: datacoords,
                },
            ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})