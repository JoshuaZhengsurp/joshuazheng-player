import React from 'react'
import { Row, Col, Avatar } from 'antd';

import './index.scss'

/**
 * 主要以静态数据为主？
*/
function MusicLibrary() {
  return (
    <div className="music-library-container">
      <div className="content-container">
        <Row>
          <Col span={17}>
            <div className='left'>
              <div className='avatar'>
                <img src="32.png" alt="" />
                <div className='bnmsg'>
                  <Avatar shape="square" size={64} src="1.jpg" />
                  <div className='name-box'>
                    <div className='title'>KiKi's Delivery Service</div>
                    <div className='des'>KiKi</div>
                  </div>
                </div>
              </div>
              <div className='banner'>
                <h2 style={{ textAlign: 'left' }}>Featured for you</h2>
                <div className='wrapper-contexts'>
                  <img src="kiki1.png" alt="" />
                  <div className='content-wrapper-header-padding dw'>
                    <div className='content-wrapper-context'>
                      <div className='content-text' style={{ maxHeight: '400px' }}>
                        Once a magical girl reaches the age of 13, she must leave home for a
                        year of independent training, and Qiqi is no exception.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </div >
  )
}

export default MusicLibrary;
