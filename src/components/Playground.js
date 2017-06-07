import React, { Component } from 'react';
import $ from 'jquery';

class Playground extends Component {
  componentDidMount() {
  }

  changeThemeColor(event) {
    let $body = $('body');
    let classList = $body.attr('class').split(/\s+/);
    let currentColor = null;
    $.each(classList, (index, item) => {
      if (item.includes('skin-')) {
        currentColor = item;
      }
    });
    $body.removeClass(currentColor).addClass(`skin-${event.target.value}`);
  }

  render() {
    const title = 'Playground';

    return (
      <div className="content-wrapper">

        <section className="content-header">
          <h1>
            {title}
          </h1>
          <ol className="breadcrumb">
            <li className="active"><a href="#"><i className="fa fa-dashboard"></i> {title}</a></li>
          </ol>
        </section>

        <section className="content">

          <div className="row">
            <div className="col-md-12">
              <div className="box box-primary">
								<div className="box-header with-border">
									<h3 className="box-title">Settings</h3>
								</div>

		            <div className="box-body">
                  <form role="form">

                    <div className="form-group">
                      <label>Choose Theme Color</label>
                      <select className="form-control" onChange={this.changeThemeColor}>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="red">Red</option>
                      </select>
                    </div>

                  </form>
                </div>

							</div>
							{/* box */}
            </div>
            {/* col-md-12 */}
          </div>
          {/* row */}

        </section>

      </div>
    );
  }
}

export default Playground;

