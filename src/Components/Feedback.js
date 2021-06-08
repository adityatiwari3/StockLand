import React, {useState} from 'react'

function Feedback() {
    
    const input = () =>{

    }
    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <h1 id="feedback-section">Send Us Your Feedback</h1>
                </div>
                <div className="col-12 col-lg-8 offset-sm-1">
                    <div className="row form-group  mt-3">
                        <label for="mobnum" className="col-12 col-md-3 col-form-label"><h6>Contact No.</h6></label>
                        <div className="col-4 col-md-2 offset-md-2">
                            <input type="number" className="form-control" id="countrycode" name="countrycode" placeholder="c. code" onChange={input}/>
                        </div>
                        <div className="col-8 col-md-5">
                            <input type="tel" className="form-control" id="Mobnum" name="Mobnum" placeholder="Mob. number" onChange={input}/>
                        </div>
                    </div>
                    <div className="from-group row mt-3">
                        <label for="emailid" className="col-12 col-md-3 col-form-label"><h6>Email</h6></label>
                        <div className="col-12 col-md-7 offset-md-2">
                            <input type="email" className="form-control" id="email" name="email" placeholder="enter your email" onChange={input}/>
                        </div>
                    </div>
                    <div className="from-group row  mt-3">
                        <div className="col-9 col-md-6 offset-md-3 mt-2">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="approve" id="approve" value="" onChange={input}/>
                                <label className="form-check-label" for="approve">
                                    <strong>May we contact you?</strong>
                                </label>
                            </div>
                        </div>
                        <div className="col-3 col-md-3">
                            <select className="form-control">
                                <option>Mob.</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label for="feedback" className="col-md-3 col-form-label"><h6>Your Feedback</h6></label>
                        <div className="col-md-9">
                            <textarea className="form-control" id="feedback" name="feedback" rows="5" onChange={input}></textarea>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <div className="offset-md-3 col-md-9">
                            <button type="submit" className="btn btn-primary" >Send Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5"></div>

        </>
    )
}

export default Feedback
