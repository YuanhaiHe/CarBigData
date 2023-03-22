$(function (){

    getData();

    var newData;
    var carData;
    var totalData;
    var mpvData;
    var suvData;
    var newXdata=[];
    var newYdata=[];
    var carXdata=[];
    var carYdata=[];
    var suvXdata=[];
    var suvYdata=[];
    var mpvXdata=[];
    var mpvYdata=[];
    var totalXdata=[];
    var totalYdata=[];



    function getData(){
        $.ajax({
                           method: 'get',
                           url: '/topSales',
                           dataType: 'json',
                           success: function (result) {
                           var data=JSON.parse(JSON.stringify(result));
                           newData=data.newTop3Result;
                           carData=data.carTop3Result;
                           totalData=data.totalTop3Result;
                           mpvData=data.mpvTop3Result;
                           suvData=data.suvTop3Result;
   
                           for(var i=0;i<newData.length;i++){
                               var string=JSON.stringify(newData[i]);
                               var temp=JSON.parse(string);
                               newXdata.push(temp.carType+"_"+temp.carName)
                               newYdata.push(temp.totalSales)
                           }
                           for(var i=0;i<carData.length;i++){
                               var string=JSON.stringify(carData[i]);
                               var temp=JSON.parse(string);
                               carXdata.push(temp.carType+"_"+temp.carName)
                               carYdata.push(temp.totalSales)
                           }
                           for(var i=0;i<suvData.length;i++){
                               var string=JSON.stringify(suvData[i]);
                               var temp=JSON.parse(string);
                               suvXdata.push(temp.carType+"_"+temp.carName)
                               suvYdata.push(temp.totalSales)
                           }
                           for(var i=0;i<mpvData.length;i++){
                               var string=JSON.stringify(mpvData[i]);
                               var temp=JSON.parse(string);
                               mpvXdata.push(temp.carType+"_"+temp.carName)
                               mpvYdata.push(temp.totalSales)
                           }
                           for(var i=0;i<totalData.length;i++){
                               var string=JSON.stringify(totalData[i]);
                               var temp=JSON.parse(string);
                               totalXdata.push(temp.carType+"_"+temp.carName)
                               totalYdata.push(temp.totalSales)
                           }
                           
   
                               echarts_top_all();
                               echarts_top_car();
                               echarts_top_new();
                               echarts_top_suv();
                               echarts_top_mpv();
                           }
                           })
       }
    
    
    function echarts_top_all() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_top_all'));
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
                data: totalXdata,
                axisLine: { show: false, },
                axisLabel: {
                    color: '#fff',
                    fontSize: 15
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
                barWidth: '30%',

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
                data: totalYdata
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_top_car() {
        var myChart = echarts.init(document.getElementById('echarts_top_car'));
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
                data: carXdata,
                axisLine: { show: false, },
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
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
                barWidth: '30%',

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
                data: carYdata
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
    function echarts_top_new() {
        var myChart = echarts.init(document.getElementById('echarts_top_new'));
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
                data: newXdata,
                axisLine: { show: false, },
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
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
                barWidth: '30%',

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
                data: newYdata
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
    function echarts_top_suv() {
        var myChart = echarts.init(document.getElementById('echarts_top_suv'));
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
                data: suvXdata,
                axisLine: { show: false, },
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
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
                min: 100000,

            },
            series: [{
                type: 'bar',
                barWidth: '30%',

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
                data: suvYdata
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
    function echarts_top_mpv() {
        var myChart = echarts.init(document.getElementById('echarts_top_mpv'));
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
                data: mpvXdata,
                axisLine: { show: false, },
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
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
                interval: 10000,
                max: 60000,
                min: 10000

            },
            series: [{
                type: 'bar',
                barWidth: '30%',

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
                data: mpvYdata
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
})