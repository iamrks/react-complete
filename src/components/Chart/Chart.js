import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPoints = props.dataPoints || [];
    const maxValue = Math.max(...dataPoints.map(c => c.value));

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    max={maxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
