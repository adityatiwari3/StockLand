import React from 'react';
import { Line } from 'react-chartjs-2'

const Chart = ({ Dates, Data }) => {
    console.log("i am here")
    return (
        <>
            <div className="row">
                <hr className='hrB col-12' />
                <div className="col-12">
                    <Line
                        //className="Graph"
                        data={{
                            labels: Dates,
                            datasets: [{
                                label: 'Stock Price',
                                data: Data,
                                backgroundColor: 'rgb(0,255,0)',
                                borderColor: ['black'],
                                borderWidth: 0,
                                fill: true
                            }]
                        }}
                        options={{

                        }}
                        height={500}
                        width={1000}

                     options={{maintainAspectRatio:false}}
                    />
                </div>
            </div>

        </>
    );
}
export default Chart;