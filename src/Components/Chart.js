import React from 'react';
import { Line } from 'react-chartjs-2'
import 'font-awesome/css/font-awesome.min.css';

const Chart = ({Dates,DataO,DataC,DataH,DataL}) => {
    return (

        <div className="row">
                {/* <hr className='hrB col-12' /> */}
                <div className="Chart col-lg-12 col-12">
                    <Line
                        className="Graph"
                        data={{
                            labels: Dates,
                            datasets: [{
                                label: 'Stock Open',
                                pointRadius: 0,
                                data: DataO,
                                backgroundColor: 'rgba(0,255,0,0.5)',
                                // borderColor: ['black'],
                                // borderWidth: 2,
                                fill: true
                            }, {
                                label: 'Stocks Close',
                                pointRadius: 0,

                                data: DataC,
                                backgroundColor: 'rgba(255,0,0,0.5)',
                                // borderColor: ['black'],
                                // borderWidth: 2,
                                fill: true
                            }, {
                                label: 'Stocks High',
                                pointRadius: 0,

                                data: DataH,
                                backgroundColor: 'rgba(0,0,255,0.5)',
                                // borderColor: ['black'],
                                //borderWidth: 2,
                                fill: true
                            }, {
                                label: 'Stocks Low',
                                pointRadius: 0,

                                data: DataL,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                // borderColor: ['black'],
                                // borderWidth: 2,
                                fill: true
                                
                            }
                        ]
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