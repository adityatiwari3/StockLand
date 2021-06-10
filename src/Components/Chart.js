import React from 'react';
import { Line } from 'react-chartjs-2'

const Chart = ({Dates,Data}) => {
    return (

        <div className="row">
                <hr className='hrB col-12' />
                <div className="Chart col-5">
                    <Line
                        className="Graph"
                        data={{
                            labels: Dates,
                            datasets: [{
                                label: 'Stock Price',
                                data: Data,
                                backgroundColor: 'rgb(0,255,0)',
                                borderColor: ['black'],
                                borderWidth: 2,
                                fill: true
                            }]
                        }}
                        options={{

                        }}
                        height={500}
                        width={1000}

                    // options={{maintainAspectRatio:false}}
                    />
                </div>
            </div>
            
     
    );
}
export default Chart;