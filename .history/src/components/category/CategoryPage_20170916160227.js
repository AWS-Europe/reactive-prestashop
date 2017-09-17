import React, { Component } from 'react';
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'

import { images } from '../../utils/images/'
import ProductList from '../ProductList'

class CategoryPage extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  getCurrentData = () => {
    let { data } = this.props.category

    if (data !== null) {
      return data.filter(item => {
        return parseInt(item.id, 10) === parseInt(this.props.match.params.id, 10)
      })
    } else {
      return null
    }
  }

  // componentDidUpdate() {
  //   let {fetching, data} = this.props.data
  //   let {productsActions} = this.props

  //   if (!fetching) {
  //     if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
  //       productsActions.fetchOne(this.props.match.params.id);
  //     }
  //   }
  // }

  render() {
    let { fetching } = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <h2>{this.getCurrentData()[0].name}</h2>
            <img src={images.categoryImage(this.getCurrentData()[0].id)} alt={this.getCurrentData()[0].name} />
            {renderHTML(this.getCurrentData()[0].description)}
            {console.}
            {/* <ProductList products={this.getCurrentData()[0].associations.products} /> */}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ categoryReducer }) {
  return {
    category: categoryReducer
  }
}


export default connect(mapStateToProps)(CategoryPage);