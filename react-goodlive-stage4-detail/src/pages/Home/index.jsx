import React from "react"
import FootNav from "../../components/FootNav"
import HomeHead from "../../components/Head"
import HomeSwiper from "../../components/Swiper"
import banner1 from "../../static/images/banner1.png"
import banner2 from "../../static/images/banner2.png"
import banner3 from "../../static/images/banner3.png"
import HomeHot from "./HomeHot"
import { connect } from "react-redux"

class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHead cityName={ this.props.city.cityName }/>
                <HomeSwiper banners={[banner1,banner2,banner3]}/>
                <HomeHot cityName={ this.props.city.cityName }/>
                <FootNav />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        city:state.city
    }
}

export default connect(mapStateToProps)(Home)