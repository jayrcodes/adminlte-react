import React, { Component } from 'react';
import ChartWrapper from '../wrappers/ChartWrapper';

class Dashboard extends Component {

  render() {
		const infoBoxes = [
      {
        logo: 'ion ion-ios-gear-outline',
        text: 'CPU Traffic',
        color: 'info-box-icon bg-aqua',
        value: '90%'
      },
      {
        logo: 'fa fa-google-plus',
        text: 'Likes',
        color: 'info-box-icon bg-red',
        value: '41,410'
      },
      {
        logo: 'ion ion-ios-gear-outline',
        text: 'CPU Traffic',
        color: 'info-box-icon bg-aqua',
        value: '90%'
      },
      {
        logo: 'fa fa-google-plus',
        text: 'Likes',
        color: 'info-box-icon bg-red',
        value: '41,410'
      }
    ];

    let i = 0;
    const mappedInfoBoxes = infoBoxes.map(info => {
      return (
        <div key={i++} className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className={info.color}><i className={info.logo}></i></span>

            <div className="info-box-content">
              <span className="info-box-text">{info.text}</span>
              <span className="info-box-number">{info.value}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="content-wrapper">

        <section className="content-header">
          <h1>
            Dashboard
            <small>it all starts here</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li className="active">Blank page</li>
          </ol>
        </section>

        <section className="content">

          <div className="row">
            {mappedInfoBoxes}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Monthly Recap Report</h3>

                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-wrench"></i></button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>

                <div className="box-body">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-center">
                        <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                      </p>

                      <div className="chart">
                        <ChartWrapper />
                      </div>

                    </div>

                    <div className="col-md-4">
                      <p className="text-center">
                        <strong>Goal Completion</strong>
                      </p>

                      <div className="progress-group">
                        <span className="progress-text">Add Products to Cart</span>
                        <span className="progress-number"><b>160</b>/200</span>

                        <div className="progress sm">
                          <div className="progress-bar progress-bar-aqua" style={{width: '80%'}}></div>
                        </div>
                      </div>

                      <div className="progress-group">
                        <span className="progress-text">Complete Purchase</span>
                        <span className="progress-number"><b>310</b>/400</span>

                        <div className="progress sm">
                          <div className="progress-bar progress-bar-red" style={{width: '80%'}}></div>
                        </div>
                      </div>

                      <div className="progress-group">
                        <span className="progress-text">Visit Premium Page</span>
                        <span className="progress-number"><b>480</b>/800</span>

                        <div className="progress sm">
                          <div className="progress-bar progress-bar-green" style={{width: '80%'}}></div>
                        </div>
                      </div>

                      <div className="progress-group">
                        <span className="progress-text">Send Inquiries</span>
                        <span className="progress-number"><b>250</b>/500</span>

                        <div className="progress sm">
                          <div className="progress-bar progress-bar-yellow" style={{width: '80%'}}></div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="box-footer">
                  <div className="row">
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                      </div>

                    </div>

                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                        <h5 className="description-header">$10,390.90</h5>
                        <span className="description-text">TOTAL COST</span>
                      </div>

                    </div>

                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                        <h5 className="description-header">$24,813.53</h5>
                        <span className="description-text">TOTAL PROFIT</span>
                      </div>

                    </div>

                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block">
                        <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                        <h5 className="description-header">1200</h5>
                        <span className="description-text">GOAL COMPLETIONS</span>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>


        </section>

      </div>
    );
  }
}

export default Dashboard;
