import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '@icedesign/layout';
import Header from "./Header";

export default class ExampleLayout extends Component {
  static displayName = 'ExampleLayout';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        {/* 主体内容 */}
        <Layout.Main scrollable style={{ paddingRight: 20, paddingTop: 20 }}>
          {this.props.children}
        </Layout.Main>
      </Layout>
    );
  }
}

const styles = {

}
