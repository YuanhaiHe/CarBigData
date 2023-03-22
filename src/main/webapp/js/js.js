$(function () {

      var totalTopData;
      var totalTopXdata=[];
      var totalTopYdata=[];


      var totalTrendData;
      var totalTrendYdata=[];
      var otherTrendData;
      var otherTrendYdata=[];

      var totalRateData;
      var datas=[];

      var newTrendData;
      var mydata;


    function echarts_7() {
         // 基于准备好的dom，初始化echarts实例
         var myChart = echarts.init(document.getElementById('echart7'));
         myChart.clear();
         option = {
             tooltip: {
                 trigger: 'axis',
                 axisPointer: {
                     type: 'shadow'
                 }
             },
             grid: {
                 left: '0%',
                 top: '15px',
                 right: '0%',
                 bottom: '0%',
                 containLabel: true
             },
             xAxis: {
                 data: totalTopXdata,
                 axisLine: { show: false, },
                 axisLabel: {
                     color: '#fff',
                     fontSize: 10//12
                 }
             },
             yAxis: {
                 name: "（人）",
                 nameTextStyle: {
                     color: '#fff',
                     fontSize: 14
                 },
                 axisLine: { show: false, },
                 axisLabel: {
                     color: '#fff',
                     fontSize: 12
                 },
                 splitLine: { show: false, },
                 interval: 50000,
                 max: 250000,
                 min: 100000

             },
             series: [{
                 type: 'bar',
                 barWidth: '30%',//

                 itemStyle: {

                     normal: {
                         barBorderRadius: 50,
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#01fdcc'
                         }, {
                             offset: 0.8,
                             color: '#11a1d8'
                         }], false)
                     }
                 },
                 data: totalTopYdata
             }]
         };
         // 使用刚指定的配置项和数据显示图表。
myChart.setOption(option,true);
         window.addEventListener("resize", function () {
             myChart.resize();
         });
     }
    function echarts_8() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart8'));
            myChart.clear();

            option = {
                color: ['#ec704a', '#2e4453', '#249cf9', '#fdb629', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    y: 'center',
                    itemWidth: 12,
                    itemHeight: 12,
                    align: 'left',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                    data: ['轿车', 'MPV', 'SUV'],
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: ['20%', '50%'],
                        label: {
                            normal: {
                                formatter: '{c|{d}%}',

                                rich: {

                                    c: {
                                        fontSize: 12,
                                        color: '#fff',

                                    }
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 2,
                                length2: 5,
                                lineStyle: {

                                    width: 1
                                }
                            }
                        },
                        roseType: 'area',

                        data: datas,
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option,true);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    function echarts_9() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('myecharts0'));
            myChart.clear();
//            let y3Data = [555, 432, 399, 222, 341, 111],
                xData = ["22年8月", "22年9月", "22年10月", "22年11月", "22年12月", "23年1月"],
                datacoords = [];
            for (var i = 0; i < xData.length; i++) {
                datacoords.push([
                    {
                        coord: [i, totalTrendYdata[i]],
                    },
                    {
                        coord: [i + 1, totalTrendYdata[i+1]],
                    },
                ]);
            }
            for (var i = 0; i < xData.length; i++) {
                datacoords.push([
                    {
                        coord: [i, otherTrendYdata[i]],
                    },
                    {
                        coord: [i + 1, otherTrendYdata[i + 1]],
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
                        min: 900000,
                        // max: function (value) {
                        //     return Math.ceil(value.max / 5) * 5;
                        // },
                        max:2050000,
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
                        data: totalTrendYdata,
                    },
                    {
                        name: "非新能源车销量",
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
                        data: otherTrendYdata,
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
    myChart.setOption(option,true);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    function echarts_10() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myecharts1'));
        myChart.clear();

        let angle = 0 //角度，用来做简单的动画效果的
        let num = mydata;

        option = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            // 标题
            title: [
                {
                    text: (1-num)*100 + '%',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontSize: '30',
                        color: '#fff',
                        fontFamily: 'Lato',
                        foontWeight: '600'
                    }
                }
            ],

            series: [
                //内圆
                {
                    type: 'pie',
                    radius: '43%',
                    center: ['50%', '50%'],
                    animation: false,
                    z: 3,
                    itemStyle: {
                        normal: {
                            color: '#032336',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            borderColor: '#3bcbf6',
                            borderWidth: 3
                        }
                    },
                    hoverAnimation: false,
                    label: {
                        show: false
                    },
                    tooltip: {
                        show: false
                    },
                    data: [100]
                },
                //外圆
                {
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    animation: false,
                    z: 0,
                    itemStyle: {
                        normal: {
                            color: '#001929',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#3bcbf6' // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: '#3bcbf6' // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#001929' // 100% 处的颜色
                                }
                            ]),
                            borderWidth: 3
                        }
                    },
                    hoverAnimation: false,
                    label: {
                        show: false
                    },
                    tooltip: {
                        show: false
                    },
                    data: [100]
                },
                // 进度光环
                {
                    name: '外部刻度',
                    type: 'gauge',
                    z: 2,
                    center: ['50%', '50%'],
                    radius: '60%',
                    min: 0, //最小刻度
                    max: 100, //最大刻度
                    splitNumber: 10, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    animation: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 15,
                            shadowColor: '#83f3f9',
                            shadowBlur: 6,
                            color: [[num / 100, '#83f3f9']]
                        }
                    }, // 仪表盘轴线
                    axisLabel: {
                        show: false
                    }, //刻度标签。
                    axisTick: {
                        show: false
                    }, //刻度样式
                    splitLine: {
                        show: false
                    }, //分隔线样式
                    detail: {
                        show: false
                    }, //仪表盘详情，用于显示数据
                    pointer: {
                        show: false
                    } //仪表盘指针。
                },
                // 进度光环背景
                {
                    name: '外部刻度',
                    type: 'gauge',
                    z: 1,
                    center: ['50%', '50%'],
                    radius: '61%',
                    min: 0, //最小刻度
                    max: 100, //最大刻度
                    splitNumber: 10, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    animation: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 25,
                            shadowColor: '#386e73',
                            shadowBlur: 10,
                            color: [[1, '#032336']]
                        }
                    }, // 仪表盘轴线
                    axisLabel: {
                        show: false
                    }, //刻度标签。
                    axisTick: {
                        show: false
                    }, //刻度样式
                    splitLine: {
                        show: false
                    }, //分隔线样式
                    detail: {
                        show: false
                    }, //仪表盘详情，用于显示数据
                    pointer: {
                        show: false
                    } //仪表盘指针。
                },
                // 转动效果
                {
                    name: 'ring5',
                    type: 'custom',
                    coordinateSystem: 'none',
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                                startAngle: ((0 + angle) * Math.PI) / 180,
                                endAngle: ((90 + angle) * Math.PI) / 180
                            },
                            style: {
                                stroke: '#0CD3DB',
                                fill: 'transparent',
                                lineWidth: 1.5
                            },
                            silent: true
                        }
                    },
                    data: [0]
                },
                {
                    name: 'ring5',
                    type: 'custom',
                    coordinateSystem: 'none',
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                                startAngle: ((180 + angle) * Math.PI) / 180,
                                endAngle: ((270 + angle) * Math.PI) / 180
                            },
                            style: {
                                stroke: '#0CD3DB',
                                fill: 'transparent',
                                lineWidth: 1.5
                            },
                            silent: true
                        }
                    },
                    data: [0]
                },
                {
                    name: 'ring5',
                    type: 'custom',
                    coordinateSystem: 'none',
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                                startAngle: ((270 + -angle) * Math.PI) / 180,
                                endAngle: ((40 + -angle) * Math.PI) / 180
                            },
                            style: {
                                stroke: '#0CD3DB',
                                fill: 'transparent',
                                lineWidth: 1.5
                            },
                            silent: true
                        }
                    },
                    data: [0]
                },
                {
                    name: 'ring5',
                    type: 'custom',
                    coordinateSystem: 'none',
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                                startAngle: ((90 + -angle) * Math.PI) / 180,
                                endAngle: ((220 + -angle) * Math.PI) / 180
                            },
                            style: {
                                stroke: '#0CD3DB',
                                fill: 'transparent',
                                lineWidth: 1.5
                            },
                            silent: true
                        }
                    },
                    data: [0]
                },
                {
                    name: 'ring5',
                    type: 'custom',
                    coordinateSystem: 'none',
                    renderItem: function (params, api) {
                        let x0 = api.getWidth() / 2
                        let y0 = api.getHeight() / 2
                        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
                        let point = getCirlPoint(x0, y0, r, 90 + -angle)
                        return {
                            type: 'circle',
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 4
                            },
                            style: {
                                stroke: '#0CD3DB', //粉
                                fill: '#0CD3DB'
                            },
                            silent: true
                        }
                    },
                    data: [0]
                },
                {
                    name: 'ring5', //绿点
                    type: 'custom',
                    coordinateSystem: 'none',
                    renderItem: function (params, api) {
                        let x0 = api.getWidth() / 2
                        let y0 = api.getHeight() / 2
                        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
                        let point = getCirlPoint(x0, y0, r, 270 + -angle)
                        return {
                            type: 'circle',
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 4
                            },
                            style: {
                                stroke: '#0CD3DB', //绿
                                fill: '#0CD3DB'
                            },
                            silent: true
                        }
                    },
                    data: [0]
                }
            ]
        }
        function getCirlPoint(x0, y0, r, angle) {
            let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
            let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
            return {
                x: x1,
                y: y1
            }
        }

        function draw() {
            angle = angle + 3
            myChart.setOption(option, true)
            //window.requestAnimationFrame(draw);
        }

        setInterval(function () {
            //用setInterval做动画感觉有问题
            draw()
        }, 100)
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option,true);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function getTopData(){
                   $.ajax({
                                      method: 'get',
                                      url: 'topSales',
                                      dataType: 'json',
                                      success: function (result) {
                                      var data=JSON.parse(JSON.stringify(result));
                                      totalTopData=data.totalTop3Result;
                                      for(var i=0;i<totalTopData.length;i++){
                                          var string=JSON.stringify(totalTopData[i]);
                                          var temp=JSON.parse(string);
                                          totalTopXdata.push(temp.carType+"_"+temp.carName)
                                          totalTopYdata.push(temp.totalSales)
                                      }
                                          echarts_7();

                                      }
                                      })
                  }
    function getRateData(){
               $.ajax({
                   method: 'get',
                   url: 'rateAnalysis',
                   dataType: 'json',
                   success: function (result) {
                       console.log(result);
                       var data=JSON.parse(JSON.stringify(result));

                       totalRateData=data.totalRateResult;

                      totalRateData=data.totalRateResult;
                                     mydata=data.newRateResult.otherRate;
                                     datas.push({"value":totalRateData.carSales,"name":"轿车"});
                                     datas.push({"value":totalRateData.mpvSales,"name":"MPV"});
                                     datas.push({"value":totalRateData.suvSales,"name":"SUV"});
                                     echarts_8();
                   }
               })
           }
    function getRateNewData(){
                   $.ajax({
                       method: 'get',
                       url: 'rateAnalysis',
                       dataType: 'json',
                       success: function (result) {
                           console.log(result);
                           var data=JSON.parse(JSON.stringify(result));


                                         mydata=data.newRateResult.otherRate;

                                         echarts_10();
                       }
                   })
               }
    function getTrendData(){
                      $.ajax({
                          method: 'get',
                          url: 'trendAnalysis',
                          dataType: 'json',
                          success: function (result) {

                              var data=JSON.parse(JSON.stringify(result));
                              totalTrendData=data.totalSalesResult;
                              otherTrendData=data.otherSalesResult;

                              for(var i in totalTrendData){

                                  totalTrendYdata.push(totalTrendData[i])
                              }
                              for(var i in otherTrendData){

                                  otherTrendYdata.push(otherTrendData[i])
                              }
                              echarts_9();
                          }
                      })
                  }
    function getTest(){

            $.ajax({
                method: 'get',
                url: 'index',
                dataType: 'json',
                success: function (result){
                    //车名，类型，平均价格
                    console.log(result);
                    var data1=result.nowIndexRecommend;
                    var new1='<td>'+ data1.paraOfNew1+'_'+data1.nameOfNew1+'</td>'+
                     '<td>'+ data1.typeOfNew1+'</td>'+
                     '<td>'+ data1.priceOfNew1+'</td>';
                    var new2='<td>'+ data1.paraOfNew2+'_'+data1.nameOfNew2+'</td>'+
                        '<td>'+ data1.typeOfNew2+'</td>'+
                        '<td>'+ data1.priceOfNew2+'</td>';
                    var new3='<td>'+ data1.paraOfNew3+'_'+data1.nameOfNew3+'</td>'+
                        '<td>'+ data1.typeOfNew3+'</td>'+
                        '<td>'+ data1.priceOfNew3+'</td>';

                    // var str1='<tr>'+'<td>'+ data1.paraOfNew1+'_'+data1.nameOfNew1+'</td>'+
                    //     '<td>'+ data1.typeOfNew1+'</td>'+
                    //     '<td>'+ data1.priceOfNew1+'</td>'+'</tr>'+
                    //     '<tr>'+'<td>'+ data1.paraOfNew2+'_'+data1.nameOfNew2+'</td>'+
                    //     '<td>'+ data1.typeOfNew2+'</td>'+
                    //     '<td>'+ data1.priceOfNew2+'</td>'+'</tr>'+
                    //     '<tr>'+'<td>'+ data1.paraOfNew3+'_'+data1.nameOfNew3+'</td>'+
                    //     '<td>'+ data1.typeOfNew3+'</td>'+
                    //     '<td>'+ data1.priceOfNew3+'</td>'+'</tr>';
                    var oil1='<td>'+ data1.paraOfOil1+'_'+data1.nameOfOil1+'</td>'+
                        '<td>'+ data1.typeOfOil1+'</td>'+
                        '<td>'+ data1.priceOfOil1+'</td>';
                    var oil2='<td>'+ data1.paraOfOil2+'_'+data1.nameOfOil2+'</td>'+
                        '<td>'+ data1.typeOfOil2+'</td>'+
                        '<td>'+ data1.priceOfOil2+'</td>';
                    var oil3='<td>'+ data1.paraOfOil3+'_'+data1.nameOfOil3+'</td>'+
                        '<td>'+ data1.typeOfOil3+'</td>'+
                        '<td>'+ data1.priceOfOil3+'</td>';
                    // var str2='<tr>'+'<td>'+ data1.paraOfOil1+'_'+data1.nameOfOil1+'</td>'+
                    //     '<td>'+ data1.typeOfOil1+'</td>'+
                    //     '<td>'+ data1.priceOfOil1+'</td>'+'</tr>'+
                    //     '<tr>'+'<td>'+ data1.paraOfOil2+'_'+data1.nameOfOil2+'</td>'+
                    //     '<td>'+ data1.typeOfOil2+'</td>'+
                    //     '<td>'+ data1.priceOfOil2+'</td>'+'</tr>'+
                    //     '<tr>'+'<td>'+ data1.paraOfOil3+'_'+data1.nameOfOil3+'</td>'+
                    //     '<td>'+ data1.typeOfOil3+'</td>'+
                    //     '<td>'+ data1.priceOfOil3+'</td>'+'</tr>';
                    document.getElementById("new1").innerHTML=new1;
                    document.getElementById("new2").innerHTML=new2;
                    document.getElementById("new3").innerHTML=new3;
                    document.getElementById("oil1").innerHTML=oil1;
                    document.getElementById("oil2").innerHTML=oil2;
                    document.getElementById("oil3").innerHTML=oil3;
                }
            })
        }

getRateData();
getTrendData();
getTopData();
getTest();
setTimeout(getRateNewData,500);
    function getRecommend(){

        $.ajax({
            method: 'get',
            url: '/recommend',
            dataType: 'json',
            success: function (result){
                console.log("成功读取");
                console.log(result);
                var data = result.detailRecommend;

                var img1 = '<img style="width: 300px; height: 200px" src="'+
                    data[0].carImage+'"/>';
                var name1 = '<td>'+data[0].carPara+'_'+data[0].carName+'</td>';
                var price1 = '<td>'+data[0].price+'(万元)</td>';

                var img2 = '<img style="width: 300px; height: 200px" src="'+
                    data[1].carImage+'"/>';
                var name2 = '<td>'+data[1].carPara+'_'+data[1].carName+'</td>';
                var price2 = '<td>'+data[1].price+'(万元)</td>';

                var img3 = '<img style="width: 300px; height: 200px" src="'+
                    data[2].carImage+'"/>';
                var name3 = '<td>'+data[2].carPara+'_'+data[2].carName+'</td>';
                var price3 = '<td>'+data[2].price+'(万元)</td>';

                var img4 = '<img style="width: 300px; height: 200px" src="'+
                    data[3].carImage+'"/>';
                var name4 = '<td>'+data[3].carPara+'_'+data[3].carName+'</td>';
                var price4 = '<td>'+data[3].price+'(万元)</td>';

                var img5 = '<img style="width: 300px; height: 200px" src="'+
                    data[4].carImage+'"/>';
                var name5 = '<td>'+data[4].carPara+'_'+data[4].carName+'</td>';
                var price5 = '<td>'+data[4].price+'(万元)</td>';

                var img6 = '<img style="width: 300px; height: 200px" src="'+
                    data[5].carImage+'"/>';
                var name6 = '<td>'+data[5].carPara+'_'+data[5].carName+'</td>';
                var price6 = '<td>'+data[5].price+'(万元)</td>';

                var img7 = '<img style="width: 300px; height: 200px" src="'+
                    data[6].carImage+'"/>';
                var name7 = '<td>'+data[6].carPara+'_'+data[6].carName+'</td>';
                var price7 = '<td>'+data[6].price+'(万元)</td>';

                var img8 = '<img style="width: 300px; height: 200px" src="'+
                    data[7].carImage+'"/>';
                var name8 = '<td>'+data[7].carPara+'_'+data[7].carName+'</td>';
                var price8 = '<td>'+data[7].price+'(万元)</td>';

                var img9 = '<img style="width: 300px; height: 200px" src="'+
                    data[8].carImage+'"/>';
                var name9 = '<td>'+data[8].carPara+'_'+data[8].carName+'</td>';
                var price9 = '<td>'+data[8].price+'(万元)</td>';

                var img10 = '<img style="width: 300px; height: 200px" src="'+
                    data[9].carImage+'"/>';
                var name10 = '<td>'+data[9].carPara+'_'+data[9].carName+'</td>';
                var price10 = '<td>'+data[9].price+'(万元)</td>';

                document.getElementById("recommend_1_img").innerHTML=img1;
                document.getElementById("recommend_1_name").innerHTML=name1;
                document.getElementById("recommend_1_price").innerHTML=price1;

                document.getElementById("recommend_2_img").innerHTML=img2;
                document.getElementById("recommend_2_name").innerHTML=name2;
                document.getElementById("recommend_2_price").innerHTML=price2;

                document.getElementById("recommend_3_img").innerHTML=img3;
                document.getElementById("recommend_3_name").innerHTML=name3;
                document.getElementById("recommend_3_price").innerHTML=price3;

                document.getElementById("recommend_4_img").innerHTML=img4;
                document.getElementById("recommend_4_name").innerHTML=name4;
                document.getElementById("recommend_4_price").innerHTML=price4;

                document.getElementById("recommend_5_img").innerHTML=img5;
                document.getElementById("recommend_5_name").innerHTML=name5;
                document.getElementById("recommend_5_price").innerHTML=price5;

                document.getElementById("recommend_6_img").innerHTML=img6;
                document.getElementById("recommend_6_name").innerHTML=name6;
                document.getElementById("recommend_6_price").innerHTML=price6;

                document.getElementById("recommend_7_img").innerHTML=img7;
                document.getElementById("recommend_7_name").innerHTML=name7;
                document.getElementById("recommend_7_price").innerHTML=price7;

                document.getElementById("recommend_8_img").innerHTML=img8;
                document.getElementById("recommend_8_name").innerHTML=name8;
                document.getElementById("recommend_8_price").innerHTML=price8;

                document.getElementById("recommend_9_img").innerHTML=img9;
                document.getElementById("recommend_9_name").innerHTML=name9;
                document.getElementById("recommend_9_price").innerHTML=price9;

                document.getElementById("recommend_10_img").innerHTML=img10;
                document.getElementById("recommend_10_name").innerHTML=name10;
                document.getElementById("recommend_10_price").innerHTML=price10;
            },
            error: function(){
                console.log("推荐出错");
            }
        })
    }
    getRecommend();

    $('.top').click(function () {
        window.location.href = 'topSalesIndex';
    });
    $('.rate').click(function () {
        window.location.href = 'rateAnalysisIndex';
    });
    $('.trend').click(function () {
        window.location.href = 'trendAnalysisIndex';
    });
    $('.recommend').click(function () {
        window.location.href = 'recommendIndex';
    });
})


















