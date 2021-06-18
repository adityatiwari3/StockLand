import React, { useState } from 'react'
import "../Styles/Comment.css";
function Comments() {
    const input = () => {

    }
    const [arrow, setArrow] = useState('up')
    const [show, setShow] = useState('Show More')
    const [boolshow, setBoolShow] = useState(false)

    const Change = () => {
        if (boolshow === false) {
            setShow('Show Less')
            setArrow('down')
            setBoolShow(!boolshow)
        }
        else {
            setShow('Show More')
            setArrow('up')
            setBoolShow(!boolshow)
        }

    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <span><h2>COMMENTS :</h2></span>
                        <hr />

                    </div>
                    <div className=' comment col-md-8 col-12'>
                        <div className='row'>
                            <div className='col-md-2 col-12'><span className="Namia">Parth Vyas ...</span></div>
                        </div>
                        <div className='row'>
                            <div className='commentContent offset-md-2 col-md-10 col-12'>
                                Kya Baat Bhai.. Tumhare pass itna time ha k comment padhoge ha...
                                Bhago aur padho varna jor se maar padegi ...
                            </div>

                        </div>
                        <div className='row'>
                            <div className="  collapse col-md-11 col-12 comment collapseExample">
                                <div className='row'>
                                    <div className='col-md-2 col-12'><span className="Namia">Parth Vyas ...</span></div>
                                </div>
                                <div className="row">
                                    <div className='commentContent offset-md-2 col-md-10 col-12'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div></div>
                            </div>
                            <div className=" offset-md-1 col-md-11 col-12 collapse comment collapseExample">
                                <div className='row'>
                                    <div className='col-md-2 col-12'><span className="Namia">Parth Vyas ...</span></div>
                                </div>
                                <div className="row">
                                    <div className='commentContent offset-md-2 col-md-10 col-12'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div></div>
                            </div>
                        </div>
                    </div>
                    <p className='d-flex justify-content-center align-items-center'>
                        <a className='ShowMore' data-toggle="collapse" href=".collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ textDecoration: 'none' }}>
                            <div onClick={Change}>
                                <h4 id="ShowMore">{show}</h4><i className={`fa fa-2x fa-caret-${arrow}`} style={{ color: 'black' }}></i>
                            </div>
                        </a>

                    </p>



                    <hr />
                    <div className="col-12 commentBox">
                        <textarea className="form-control" id="feedback" name="feedback" rows="5" placeholder='Enter your comment...' onChange={input}></textarea>
                        <div className="row" style={{ marginTop: '30px', marginBottom: '30px' }}>
                            <div className='offset-md-2 col-md-5 col-12'>
                                <h3 style={{ marginRight: '8px', display: 'inline' }}>Comment As:</h3>
                                <input type="text" placeholder="Enter your name" />
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button className="btn col-5 feedbackBtn offset-md-1 col-md-1" style={{ marginRight: '8px' }}><b>Publish</b></button>
                            <button className="btn col-5 offset-md-1 col-md-1" style={{ border: '1px solid black' }}>Preview</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Comments
