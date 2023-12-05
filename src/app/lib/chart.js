'use client'
import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState} from 'react';
import 'chartjs-adapter-date-fns';


const BarChart = ({data}) => {
    const [uniqueIdCounter, setUniqueIdCounter] = useState(0);

  useEffect(() => {
    setUniqueIdCounter(0); 
  }, [data]);

    const chartRef=useRef(null);
    const chartInstance= useRef(null);
    const reversedData=data.slice().reverse();
    
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (chartInstance.current) {
           
            chartInstance.current.destroy();
          }
    
        const chartData = {
            labels: reversedData.map((item, index) => `${new Date(item.startDate).toLocaleDateString([], { hour: 'numeric' })}`),
            datasets: [
              {
                label: 'Hinta snt/kWh',
                data: reversedData.map(item =>  item.price),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          };
      
          const options = {
            
            scales: {
              x: {
                type:'category',
                title: {
                  display: true,
                  text: 'Aika',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Hinta',
                },
              },
            },
          };
      
          chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: options,
          });
      
          return () => {
            chartInstance.current.destroy();
          };
        }, [reversedData]);

        return <canvas ref={chartRef}/>;
        
};
export default BarChart;