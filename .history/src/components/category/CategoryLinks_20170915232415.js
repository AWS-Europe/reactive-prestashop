import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'reactstrap';
import {getAll} from '../../actions/cmsActions'


class CategoryLink extends Component {
  componentDidMount() {
    let {getAll} = this.props

  }

  render() {
    let {fetching, data} = this.props.cms

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <h5>Our Company</h5>
            <ListGroup>
              {
                data.map((item, key) => (
                  <ListGroupItem key={key}>
                    <Link to={`/cms/${item.id}-${item.link_rewrite}`}>
                      {item.meta_title}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({cmsReducer}) {
  return {
    // cms: cmsReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // getAll: bindActionCreators(getAll, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CmsLinks);