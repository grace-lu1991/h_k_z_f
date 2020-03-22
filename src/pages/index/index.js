import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import axios, { baseURL } from '../../units/request'

class Index extends Component {
    state = {
        carouselList: [],
        imgHeight: 176,
    }
    async componentDidMount() {
        const res = await axios.get(
            "/home/swiper"
        )
        console.log(res)
        this.setState({
            carouselList:res.data.body
        })
    }
    render() {
        return (<div>
            {this.state.carouselList.length&&<Carousel 
                autoplay
                infinite
            >
                {this.state.carouselList.map((val) => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{
                            display: 'inline-block', width: '100%', height: this.state.imgHeight 
                        }}
                    >
                        <img
                            src={baseURL + val.imgSrc}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>}

        </div>);
    }
}

export default Index;