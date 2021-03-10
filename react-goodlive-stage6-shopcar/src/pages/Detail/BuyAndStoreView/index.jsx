import React from "react"
import "./style.less"

export default class BuyAndStoreView extends React.Component {

    clickStoreHandle = () =>{
        this.props.onStore();
    }

    render() {
        return (
            <div>
                <div className="buy-store-container clear-fix">
                    <div className="item-container float-left">
                        {
                            this.props.isCollect ?
                            <button className="selected o" onClick={ this.clickStoreHandle }>已收藏</button>
                            :
                            <button className="selected" onClick={ this.clickStoreHandle }>收藏</button>

                        }
                    </div>
                    <div className="item-container float-right">
                        <button>购买</button>
                    </div>
                </div>
            </div>
        )
    }
}