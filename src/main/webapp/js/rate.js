$(function(){


var newData;
var data1;
var data2;
var data3;
var data4;
var data5;
var data6;
var mydata;
var totalData;
var datas1=[];
var datas2=[];
var datas3=[];
var datas4=[];
var datas5=[];
var datas6=[];
var totaldatas=[];

    getData();
    getNewData();

    function getData(){
        $.ajax({
            method: 'get',
            url: '/rateAnalysis',
            dataType: 'json',
            success: function (result) {
                console.log(result);
                var data=JSON.parse(JSON.stringify(result));
                data1=data.rate1result;
                data2=data.rate2result;
                data3=data.rate3result;
                data4=data.rate4result;
                data5=data.rate5result;
                data6=data.rate6result;
                totalData=data.totalRateResult;

                datas1.push({"value":data1.carSales,"name":"轿车"})
                datas1.push({"value":data1.suvSales,"name":"SUV"})
                datas1.push({"value":data1.mpvSales,"name":"MPV"})

                datas2.push({"value":data2.carSales,"name":"轿车"})
                datas2.push({"value":data2.suvSales,"name":"SUV"})
                datas2.push({"value":data2.mpvSales,"name":"MPV"})

                datas3.push({"value":data3.carSales,"name":"轿车"})
                datas3.push({"value":data3.suvSales,"name":"SUV"})
                datas3.push({"value":data3.mpvSales,"name":"MPV"})

                datas4.push({"value":data4.carSales,"name":"轿车"})
                datas4.push({"value":data4.suvSales,"name":"SUV"})
                datas4.push({"value":data4.mpvSales,"name":"MPV"})

                datas5.push({"value":data5.carSales,"name":"轿车"})
                datas5.push({"value":data5.suvSales,"name":"SUV"})
                datas5.push({"value":data5.mpvSales,"name":"MPV"})

                datas6.push({"value":data6.carSales,"name":"轿车"})
                datas6.push({"value":data6.suvSales,"name":"SUV"})
                datas6.push({"value":data6.mpvSales,"name":"MPV"})

                totaldatas.push({"value":totalData.carSales,"name":"轿车"})

                totaldatas.push({"value":totalData.suvSales,"name":"SUV"})
                totaldatas.push({"value":totalData.mpvSales,"name":"MPV"})




                echarts_rate_total();
                echarts_rate_1();
                echarts_rate_2();
                echarts_rate_3();
                echarts_rate_4();
                echarts_rate_5();
                echarts_rate_6();
                echarts_rate_new();
            }
        })
    }
    function getNewData(){
                       $.ajax({
                           method: 'get',
                           url: '/rateAnalysis',
                           dataType: 'json',
                           success: function (result) {
                               console.log(result);
                               var data=JSON.parse(JSON.stringify(result));

                                             mydata = data.newRateResult.otherRate;

                                             echarts_rate_new();
                           }
                       })
                   }


    function echarts_rate_total(){
        var myChartType = echarts.init(document.getElementById('echarts_rate_total'));
        option = {
            color: ['#249cf9', '#fdb629', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: totaldatas
                }
            ]
        };
        myChartType.setOption(option);
        window.addEventListener("resize", function () {
            myChartType.resize();
        });
    }
    function echarts_rate_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_1'));


        option = {
            color: ['#ec704a','#249cf9', '#fdb629'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: datas1
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_rate_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_2'));


        option = {
            color: ['#249cf9', '#fdb629', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: datas2
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_rate_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_3'));


        option = {
            color: ['#fdb629', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: datas3
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_rate_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_4'));


        option = {
            color: ['#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: datas4
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_rate_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_5'));


        option = {
            color: ['#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: datas5
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_rate_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_6'));


        option = {
            color: ['#8d4bbb', '#6635EF', '#FFAFDA'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x:'right',
                y:'center',
                textStyle: {
                    color: 'white',
                },
                left: 10,
                data: ['轿车', 'SUV', 'MPV']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: datas6
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_rate_new() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_rate_new'));
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
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})