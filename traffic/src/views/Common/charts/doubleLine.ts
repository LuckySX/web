/*
 * @Description:
 * @Autor: niumiaomiao
 * @Date: 2020-06-04 09:23:28
 * @LastEditors: fuping
 * @LastEditTime: 2020-08-03 11:14:59
 */
import { axisLabelColor, axisLineColor } from './baseUtils'

export const stackBarLineOption = {
  color: '#0B56A7',
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: [5, 10],
    textStyle: {
      color: '#333'
    },
    formatter: (data: any) => {
      let tip = `时间: ${data[0].name || '无数据'}<br>`
      for (let i = 0; i < data.length; i++) {
        const unit = data[i].seriesName === '恶意代码域名用户数' || data[i].seriesName === '钓鱼域名用户数' ? '人' : '万次'
        tip += `${data[i].seriesName}: ${data[i].value || '无数据'}${unit}<br>`
      }
      return tip
    }
  },
  legend: {
    itemWidth: 15,
    itemHeight: 3,
    left: 'center'
  },
  grid: {
    left: 35,
    right: 35,
    bottom: 10,
    top: 30,
    containLabel: true
  },
  xAxis: [
    {
      axisLabel: {
        color: axisLabelColor
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor,
          opacity: 0.5
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        length: 2
      },
      splitNumber: 3,
      data: []
    }
  ],
  yAxis: [
    {
      name: '',
      type: 'value',
      position: 'left',
      axisLabel: {
        color: axisLabelColor
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor,
          opacity: 0.5
        }
      },
      splitLine: {
        lineStyle: {
          color: axisLineColor,
          opacity: 0.1
        }
      },
      axisTick: {
        length: 2,
        alignWithLabel: true
      }
    },
    {
      name: '',
      type: 'value',
      position: 'right',
      axisLabel: {
        color: axisLabelColor
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor,
          opacity: 0.5
        }
      },
      splitLine: {
        lineStyle: {
          color: axisLineColor,
          opacity: 0.1
        }
      },
      axisTick: {
        length: 2,
        alignWithLabel: true
      }
    }
  ],
  series: [
    {
      name: '恶意代码域名用户数',
      type: 'bar',
      yAxisIndex: 0,
      barWidth: 10,
      itemStyle: {
        color: '#0B56A7'
      },
      data: []
    },
    {
      name: '钓鱼域名用户数',
      type: 'bar',
      yAxisIndex: 0,
      barWidth: 10,
      itemStyle: {
        color: '#ffa906'
      },
      data: []
    },
    {
      name: '恶意代码域名连接数',
      type: 'line',
      yAxisIndex: 1,
      smooth: true, //平滑曲线显示
      showSymbol: false,
      itemStyle: {
        color: '#0B56A7'
      },
      lineStyle: {
        color: '#0B56A7'
      },
      data: []
    },
    {
      name: '钓鱼域名连接数',
      type: 'line',
      yAxisIndex: 1,
      smooth: true, //平滑曲线显示
      showSymbol: false,
      itemStyle: {
        color: '#ffa906'
      },
      lineStyle: {
        color: '#ffa906'
      },
      data: []
    }
  ]
}
