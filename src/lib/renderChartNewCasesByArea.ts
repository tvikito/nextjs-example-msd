import { type CovidData } from "~/hooks/useFetchCovidData"

export const renderChartNewCasesByArea = async (
  container: string | HTMLElement,
  data: CovidData,
) => {
  const ChartG2 = (await import("@antv/g2")).Chart

  const chart = new ChartG2({
    container,
    autoFit: true,
    height: 300,
    theme: "classic",
  })

  const filteredData: { area: string; count: number }[] = (() => {
    const map = new Map<string, number>()

    // filter only first appearence of area and its count
    for (const item of data) {
      if (![...map.keys()].includes(item.area)) {
        map.set(item.area, item.cumCases)
      }
    }

    // return array of all areas with it's latest count
    return Array.from(map, ([area, count]) => {
      return { area, count }
    })
  })()

  chart.data(filteredData)

  chart.coordinate("theta", {
    radius: 0.85,
  })

  chart.scale("count", {
    formatter: (val) => `${val / 1000}k`,
  })
  chart.axis(false)
  const interval = chart
    .interval()
    .adjust("stack")
    .position("count")
    .color("area")
    .label("count", {
      offset: -40,
      style: {
        textAlign: "center",
        shadowBlur: 2,
        shadowColor: "rgba(0, 0, 0, .45)",
        fill: "#fff",
      },
    })
    .tooltip("area*count", (item, count) => ({
      name: item as string,
      value: `${count / 1000} k`,
    }))
    .style({
      lineWidth: 1,
      stroke: "#fff",
    })
  chart.interaction("element-single-selected")
  chart.render()

  interval.elements[0]?.setState("selected", true)

  return chart
}
