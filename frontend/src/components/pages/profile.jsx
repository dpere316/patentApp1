import React, { Component } from 'react';

class Profile extends Component {

    
    render() {
        return (
            <div className="content-wrapper" style={{minHeight: "1136px"}}>
            <div className="col-md-9">
  <div className="nav-tabs-custom">
    <ul className="nav nav-tabs">
      <li className><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#activity" data-toggle="tab" aria-expanded="false">Activity</a></li>
      <li className><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#timeline" data-toggle="tab" aria-expanded="false">Timeline</a></li>
      <li className="active"><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#settings" data-toggle="tab" aria-expanded="true">Settings</a></li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane" id="activity">
        {/* Post */}
        <div className="post">
          <div className="user-block">
            <img className="img-circle img-bordered-sm" src="./AdminLTE 2 _ User Profile_files/user1-128x128.jpg" alt="user image" />
            <span className="username">
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Jonathan Burke Jr.</a>
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
            </span>
            <span className="description">Shared publicly - 7:30 PM today</span>
          </div>
          {/* /.user-block */}
          <p>
            Lorem ipsum represents a long-held tradition for designers,
            typographers and the like. Some people hate it and argue for
            its demise, but others ignore the hate as they create awesome
            tools to help create filler text for everyone from bacon lovers
            to Charlie Sheen fans.
          </p>
          <ul className="list-inline">
            <li><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
            <li><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
            </li>
            <li className="pull-right">
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
                (5)</a></li>
          </ul>
          <input className="form-control input-sm" type="text" placeholder="Type a comment" />
        </div>
        {/* /.post */}
        {/* Post */}
        <div className="post clearfix">
          <div className="user-block">
            <img className="img-circle img-bordered-sm" src="./AdminLTE 2 _ User Profile_files/user7-128x128.jpg" alt="User Image" />
            <span className="username">
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Sarah Ross</a>
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
            </span>
            <span className="description">Sent you a message - 3 days ago</span>
          </div>
          {/* /.user-block */}
          <p>
            Lorem ipsum represents a long-held tradition for designers,
            typographers and the like. Some people hate it and argue for
            its demise, but others ignore the hate as they create awesome
            tools to help create filler text for everyone from bacon lovers
            to Charlie Sheen fans.
          </p>
          <form className="form-horizontal">
            <div className="form-group margin-bottom-none">
              <div className="col-sm-9">
                <input className="form-control input-sm" placeholder="Response" />
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn btn-danger pull-right btn-block btn-sm">Send</button>
              </div>
            </div>
          </form>
        </div>
        {/* /.post */}
        {/* Post */}
        <div className="post">
          <div className="user-block">
            <img className="img-circle img-bordered-sm" src="./AdminLTE 2 _ User Profile_files/user6-128x128.jpg" alt="User Image" />
            <span className="username">
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Adam Jones</a>
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
            </span>
            <span className="description">Posted 5 photos - 5 days ago</span>
          </div>
          {/* /.user-block */}
          <div className="row margin-bottom">
            <div className="col-sm-6">
              <img className="img-responsive" src="./AdminLTE 2 _ User Profile_files/photo1.png" alt="Photo" />
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6">
                  <img className="img-responsive" src="./AdminLTE 2 _ User Profile_files/photo2.png" alt="Photo" />
                  <br />
                  <img className="img-responsive" src="./AdminLTE 2 _ User Profile_files/photo3.jpg" alt="Photo" />
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <img className="img-responsive" src="./AdminLTE 2 _ User Profile_files/photo4.jpg" alt="Photo" />
                  <br />
                  <img className="img-responsive" src="./AdminLTE 2 _ User Profile_files/photo1.png" alt="Photo" />
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <ul className="list-inline">
            <li><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
            <li><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
            </li>
            <li className="pull-right">
              <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
                (5)</a></li>
          </ul>
          <input className="form-control input-sm" type="text" placeholder="Type a comment" />
        </div>
        {/* /.post */}
      </div>
      {/* /.tab-pane */}
      <div className="tab-pane" id="timeline">
        {/* The timeline */}
        <ul className="timeline timeline-inverse">
          {/* timeline time label */}
          <li className="time-label">
            <span className="bg-red">
              10 Feb. 2014
            </span>
          </li>
          {/* /.timeline-label */}
          {/* timeline item */}
          <li>
            <i className="fa fa-envelope bg-blue" />
            <div className="timeline-item">
              <span className="time"><i className="fa fa-clock-o" /> 12:05</span>
              <h3 className="timeline-header"><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Support Team</a> sent you an email</h3>
              <div className="timeline-body">
                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                weebly ning heekya handango imeem plugg dopplr jibjab, movity
                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                quora plaxo ideeli hulu weebly balihoo...
              </div>
              <div className="timeline-footer">
                <a className="btn btn-primary btn-xs">Read more</a>
                <a className="btn btn-danger btn-xs">Delete</a>
              </div>
            </div>
          </li>
          {/* END timeline item */}
          {/* timeline item */}
          <li>
            <i className="fa fa-user bg-aqua" />
            <div className="timeline-item">
              <span className="time"><i className="fa fa-clock-o" /> 5 mins ago</span>
              <h3 className="timeline-header no-border"><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Sarah Young</a> accepted your friend request
              </h3>
            </div>
          </li>
          {/* END timeline item */}
          {/* timeline item */}
          <li>
            <i className="fa fa-comments bg-yellow" />
            <div className="timeline-item">
              <span className="time"><i className="fa fa-clock-o" /> 27 mins ago</span>
              <h3 className="timeline-header"><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Jay White</a> commented on your post</h3>
              <div className="timeline-body">
                Take me to your leader!
                Switzerland is small and neutral!
                We are more like Germany, ambitious and misunderstood!
              </div>
              <div className="timeline-footer">
                <a className="btn btn-warning btn-flat btn-xs">View comment</a>
              </div>
            </div>
          </li>
          {/* END timeline item */}
          {/* timeline time label */}
          <li className="time-label">
            <span className="bg-green">
              3 Jan. 2014
            </span>
          </li>
          {/* /.timeline-label */}
          {/* timeline item */}
          <li>
            <i className="fa fa-camera bg-purple" />
            <div className="timeline-item">
              <span className="time"><i className="fa fa-clock-o" /> 2 days ago</span>
              <h3 className="timeline-header"><a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">Mina Lee</a> uploaded new photos</h3>
              <div className="timeline-body">
                <img src="./AdminLTE 2 _ User Profile_files/150x100" alt="..." className="margin" />
                <img src="./AdminLTE 2 _ User Profile_files/150x100" alt="..." className="margin" />
                <img src="./AdminLTE 2 _ User Profile_files/150x100" alt="..." className="margin" />
                <img src="./AdminLTE 2 _ User Profile_files/150x100" alt="..." className="margin" />
              </div>
            </div>
          </li>
          {/* END timeline item */}
          <li>
            <i className="fa fa-clock-o bg-gray" />
          </li>
        </ul>
      </div>
      {/* /.tab-pane */}
      <div className="tab-pane active" id="settings">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputName" placeholder="Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" placeholder="Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> I agree to the <a href="https://adminlte.io/themes/AdminLTE/pages/examples/profile.html#">terms and conditions</a>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-danger">Submit</button>
            </div>
          </div>
        </form>
      </div>
      {/* /.tab-pane */}
    </div>
    {/* /.tab-content */}
  </div>
  {/* /.nav-tabs-custom */}
</div>

              </div>
            
        );
    }
}

export default Profile;

            // <div className="mt-3 ml-3">
            //     <div>Name: {this.props.auth.name}</div>
            //     <div>Role: {this.props.auth.role}</div>
            //     <div>Email: {this.props.auth.email}</div>     
            // </div>